const express = require('express');
const axios = require('axios');
const { compareValues, applyPagination } = require('./utils/helper');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to fetch responses and apply filters
app.get('/api/:formId/filteredResponses', async (req, res) => {
    try {
        const { formId } = req.params;
        if (!formId) {
            return res.status(400).json({ error: 'Form ID is required.' });
        }

        const apiEndpoint = `https://api.fillout.com/v1/api/forms/${formId}/submissions`;
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ error: 'Bearer token is required.' });
        }

        let { filters: filtersStr, offset = 0, limit = 150 } = req.query;
        let filters = [];

        if (filtersStr) {
            try {
                filters = JSON.parse(filtersStr);
            } catch (error) {
                return res.status(400).json({ error: 'Invalid filters JSON string.' });
            }
        }

        const queryParams = { ...req.query };
        delete queryParams.filters;
        delete queryParams.limit;
        delete queryParams.offset;

        const response = await axios.get(apiEndpoint, {
            params: queryParams,
            headers: { Authorization: token }
        });

        const filteredResponses = response.data.responses.filter(submission => {
            return filters.every(query => {
                const question = submission.questions.find(q => q.id === query.id);
                if (!question) return false;

                switch (question.type) {
                    case 'DatePicker':
                        const questionDate = new Date(question.value);
                        const queryDate = new Date(query.value);
                        return compareValues(questionDate.getTime(), queryDate.getTime(), query.condition);
                    case 'number':
                        return compareValues(parseFloat(question.value), parseFloat(query.value), query.condition);
                    default:
                        return compareValues(question.value, query.value, query.condition);
                }
            });
        });

        const totalResponses = filteredResponses.length;
        const pageCount = Math.ceil(totalResponses / limit);

        const finalResponse = {
            responses: applyPagination(filteredResponses, limit, offset),
            totalResponses,
            pageCount
        };

        res.json(finalResponse);
    } catch (error) {
        console.error('Error fetching responses:', error.message);
        res.status(500).json({ error: 'Error fetching responses' });
    }
});


// Start the server
app.listen(port, "0.0.0.0", function () {
    console.log(`Server running on port ${port}`);
});