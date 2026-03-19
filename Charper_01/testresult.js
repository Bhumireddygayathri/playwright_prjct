// Sample test results array
const testResults = ["pass", "fail", "skip", "pass", "fail", "pass", "pass", "skip", "pass"];

// Initialize counters
let passed = 0;
let failed = 0;
let skipped = 0;

// 1. Use a for loop to count the results
for (let i = 0; i < testResults.length; i++) {
    const result = testResults[i];

    if (result === "pass") {
        passed++;
    } else if (result === "fail") {
        failed++;
    } else if (result === "skip") {
        skipped++;
    }
}

// 2. Calculate Total and Pass Rate
const totalTests = testResults.length;
// Formula: (passed / total) * 100
const passRate = totalTests > 0 ? ((passed / totalTests) * 100).toFixed(2) : 0;

// 3. Determine Verdict
let verdict = "";
if (failed === 0) {
    verdict = "Ready for release";
} else if (failed <= 2) {
    verdict = "Review";
} else {
    verdict = "Block release";
}

// 4. Print the Test Report
console.log("--- Test Report ---");
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed:      ${passed}`);
console.log(`Failed:      ${failed}`);
console.log(`Skipped:     ${skipped}`);
console.log(`Pass Rate:   ${passRate}%`);
console.log(`Verdict:     ${verdict.toUpperCase()}`);
console.log("-------------------");
