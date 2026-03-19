

function getStatusMessage(statusCode) {
    const statusMessages = {
        200: "PASS - OK: Request successful",
        201: "PASS - Created: Resource created successfully",
        301: "WARNING - Moved Permanently: URL has changed",
        400: "FAIL - Bad Request: Check request payload",
        401: "FAIL - Unauthorized: Check auth token",
        403: "FAIL - Forbidden: Insufficient permissions",
        404: "FAIL - Not Found: Check endpoint URL",
        500: "FAIL - Internal Server Error: Backend issue"
    };

    return statusMessages[statusCode] || "UNKNOWN - Unhandled status code";
}


// Read status code interactively at runtime
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter an HTTP status code (e.g., 200): ', (input) => {
    if (input.trim()) {
        const statusCode = parseInt(input.trim(), 10);
        console.log(`Status Code Input: ${statusCode}`);
        console.log(`Message: ${getStatusMessage(statusCode)}`);
    } else {
        console.log("No status code provided.");
    }
    readline.close();
});
