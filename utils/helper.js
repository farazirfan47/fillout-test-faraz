/**
 * Applies pagination to a list of responses.
 * @param {Array} filteredResponses - The array of responses to be paginated.
 * @param {number} limit - The maximum number of items to include in a page.
 * @param {number} offset - The starting index of the pagination.
 * @returns {Array} - The paginated subset of responses.
 */
const applyPagination = (filteredResponses, limit, offset) => {
    limit = limit || filteredResponses.length
    const startIndex = offset
    const endIndex = Math.min((parseInt(offset) + parseInt(limit)), filteredResponses.length)
    return filteredResponses.slice(startIndex, endIndex);
}

/**
 * Compares two values based on a given condition.
 * @param {*} questionValue - The value from the question.
 * @param {*} queryValue - The value from the query.
 * @param {string} condition - The condition to compare the values (equals, does_not_equal, greater_than, less_than).
 * @returns {boolean} - The result of the comparison.
 */
const compareValues = (questionValue, queryValue, condition) => {
    switch (condition) {
        case 'equals':
            return questionValue === queryValue;
        case 'does_not_equal':
            return questionValue !== queryValue;
        case 'greater_than':
            return questionValue > queryValue;
        case 'less_than':
            return questionValue < queryValue;
        default:
            return false;
    }
}

module.exports = { applyPagination, compareValues };