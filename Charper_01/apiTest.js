/**
 * Simulates an API call with a 40% success rate.
 * @returns {Promise<string>}
 */
function simulateApiCall() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random();
        // 40% chance of success (0.6 to 1.0)
        if (randomValue > 0.6) {
            resolve("API Call Successful! Data received.");
        } else {
            reject(new Error(`Network Error (Value: ${randomValue.toFixed(2)})`));
        }
    });
}

/**
 * Retries the API call using a do...while loop.
 */
async function runRetryingApiCall() {
    const maxRetries = 5;
    let attempts = 0;
    let success = false;
    let finalResult;

    console.log("--- Starting API Request Process ---\n");

    do {
        attempts++;
        try {
            console.log(`Attempt ${attempts}: Initiating...`);
            finalResult = await simulateApiCall();
            success = true; // If successful, break the loop
            console.log(`Attempt ${attempts}: Success!`);
        } catch (error) {
            console.log(`Attempt ${attempts}: Failed - ${error.message}`);
            if (attempts < maxRetries) {
                console.log("Retrying...\n");
                // Optional: Add a delay here using setTimeout for exponential backoff
            }
        }
    } while (!success && attempts < maxRetries);

    console.log("\n--- Final Result ---");
    if (success) {
        console.log(`Result: ${finalResult}`);
    } else {
        console.log(`Result: Failed after ${maxRetries} attempts.`);
    }
}

runRetryingApiCall();
