// --- Configuration ---
const VALID_USERNAME = "admin";
const VALID_PASSWORD = "Password123!";
const MAX_ATTEMPTS = 3;

// --- State Variables ---
// var used for global scope tracking across simulation
var consecutiveFailures = 0;
var isAccountLocked = false;

// --- Simulated Login Attempts ---
const loginAttempts = [
    { user: "admin", pass: "wrong1" },
    { user: "admin", pass: "Password123!" }, // Success
    { user: "admin", pass: "wrong2" },
    { user: "admin", pass: "wrong3" },
    { user: "admin", pass: "wrong4" }, // Should be blocked
];

let i = 0; // let used for loop variable

console.log("Starting login system...");

do {
    let currentAttempt = loginAttempts[i];
    console.log(`\nAttempt ${i + 1}: Testing user '${currentAttempt.user}'`);

    // --- Validation Logic ---
    // Using strict equality (===) and logical AND (&&)
    if (currentAttempt.user === VALID_USERNAME && currentAttempt.pass === VALID_PASSWORD) {
        console.log("✅ Login successful!");
        consecutiveFailures = 0; // Reset failures on success
    } else {
        consecutiveFailures++;
        console.log(`❌ Login failed. Failures: ${consecutiveFailures}/${MAX_ATTEMPTS}`);
    }

    // --- Brute-force Detection ---
    if (consecutiveFailures >= MAX_ATTEMPTS) {
        isAccountLocked = true;
        console.log("🚨 ACCOUNT LOCKED DUE TO TOO MANY FAILED ATTEMPTS.");
        break; // Stop processing further attempts
    }

    i++;
} while (i < loginAttempts.length);

console.log("\nSimulation finished.");
