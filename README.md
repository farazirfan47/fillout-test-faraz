# fillout-test-faraz

# Requirements
Node.js 18

# Endpoint
Url:  https://fillout-test-faraz-production.up.railway.app/api/{formId}/filteredResponses  
Params: filters=[ {"id": "fFnyxwWa3KV6nBdfBDCHEA", "condition": "greater_than", "value": 1}]&limit=2&offset=2

You can also append regular query params as well

# Output
```
{
    "responses": [
        {
            "submissionId": "17e08db1-d685-48a2-b88c-b4486a57cfa7",
            "submissionTime": "2024-02-27T21:21:15.587Z",
            "lastUpdatedAt": "2024-02-27T21:21:15.587Z",
            "questions": [
                {
                    "id": "4KC356y4M6W8jHPKx9QfEy",
                    "name": "Anything else you'd like to share before your call?",
                    "type": "LongAnswer",
                    "value": "Nope"
                },
                {
                    "id": "bE2Bo4cGUv49cjnqZ4UnkW",
                    "name": "What is your name?",
                    "type": "ShortAnswer",
                    "value": "Tom"
                },
                {
                    "id": "dSRAe3hygqVwTpPK69p5td",
                    "name": "Please select a date to schedule your yearly check-in.",
                    "type": "DatePicker",
                    "value": "2024-02-24"
                },
                {
                    "id": "fFnyxwWa3KV6nBdfBDCHEA",
                    "name": "How many employees work under you?",
                    "type": "NumberInput",
                    "value": 50
                },
                {
                    "id": "jB2qDRcXQ8Pjo1kg3jre2J",
                    "name": "Which department do you work in?",
                    "type": "MultipleChoice",
                    "value": "Upper management"
                },
                {
                    "id": "kc6S6ThWu3cT5PVZkwKUg4",
                    "name": "What is your email?",
                    "type": "EmailInput",
                    "value": "tom@fillout.com"
                }
            ],
            "calculations": [],
            "urlParameters": [],
            "quiz": {},
            "documents": []
        },
        {
            "submissionId": "d25c76c4-0ad6-4418-acca-39809b98cb9e",
            "submissionTime": "2024-03-04T04:00:02.025Z",
            "lastUpdatedAt": "2024-03-04T04:00:02.025Z",
            "questions": [
                {
                    "id": "4KC356y4M6W8jHPKx9QfEy",
                    "name": "Anything else you'd like to share before your call?",
                    "type": "LongAnswer",
                    "value": "Nope"
                },
                {
                    "id": "bE2Bo4cGUv49cjnqZ4UnkW",
                    "name": "What is your name?",
                    "type": "ShortAnswer",
                    "value": "Duplicate submission"
                },
                {
                    "id": "dSRAe3hygqVwTpPK69p5td",
                    "name": "Please select a date to schedule your yearly check-in.",
                    "type": "DatePicker",
                    "value": "2024-03-02"
                },
                {
                    "id": "fFnyxwWa3KV6nBdfBDCHEA",
                    "name": "How many employees work under you?",
                    "type": "NumberInput",
                    "value": 5
                },
                {
                    "id": "jB2qDRcXQ8Pjo1kg3jre2J",
                    "name": "Which department do you work in?",
                    "type": "MultipleChoice",
                    "value": "Upper management"
                },
                {
                    "id": "kc6S6ThWu3cT5PVZkwKUg4",
                    "name": "What is your email?",
                    "type": "EmailInput",
                    "value": "billy@fillout.com"
                }
            ],
            "calculations": [],
            "urlParameters": [],
            "quiz": {},
            "documents": []
        }
    ],
    "totalResponses": 8,
    "pageCount": 4
}
```

# Run Locally
```
npm install
node index.js
```