/**
 * Mini Test Suite Runner
 * Demonstrates: var/let/const, loops, conditionals, operators, and type checks.
 */

// 1. Const: Fixed values (Design System/Configuration)
const COMPARISON_TYPES = {
    STRICT: 'strictEqual',
    LOOSE: 'looseEqual',
    TYPE: 'typeCheck',
    TRUTHY: 'truthy',
    LESS: 'lessThan'
};

// 2. Test Data (Input Array)
const testCases = [
    { name: "Verify String Value", expected: "Playwright", actual: "Playwright", type: COMPARISON_TYPES.STRICT },
    { name: "Check Numeric Equality", expected: 200, actual: "200", type: COMPARISON_TYPES.LOOSE },
    { name: "Validate User Object Type", expected: "object", actual: { id: 1 }, type: COMPARISON_TYPES.TYPE },
    { name: "Element Visibility", expected: true, actual: (1 > 0), type: COMPARISON_TYPES.TRUTHY },
    { name: "Response Time Check", expected: 500, actual: 450, type: COMPARISON_TYPES.LESS },
    { name: "Intentional Failure", expected: "Success", actual: "Failed", type: COMPARISON_TYPES.STRICT },
    { name: "Type Mismatch", expected: "number", actual: "100", type: COMPARISON_TYPES.TYPE },
    { name: "Another Success", expected: 10, actual: 10, type: COMPARISON_TYPES.STRICT }
];

// 3. Var: Global tracking (accessible everywhere in script)
var globalResults = [];
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// 4. Execution Logic using For Loop
console.log(">>> Starting Test Suite Execution <<<\n");

for (let i = 0; i < testCases.length; i++) {
    // let: Block-scoped internal variable
    let test = testCases[i];
    let isPassed = false;
    let errorMessage = null;

    try {
        // Operators: Nullish Coalescing (??) for defaults
        let actualVal = test.actual ?? "undefined"; 

        // Switch Statement for Comparison Types
        switch (test.type) {
            case COMPARISON_TYPES.STRICT:
                isPassed = test.actual === test.expected; // Strict equality
                break;
            case COMPARISON_TYPES.LOOSE:
                isPassed = test.actual == test.expected; // Loose equality
                break;
            case COMPARISON_TYPES.TYPE:
                isPassed = typeof test.actual === test.expected; // Type check
                break;
            case COMPARISON_TYPES.TRUTHY:
                isPassed = !!test.actual; // Double bang truthy check
                break;
            case COMPARISON_TYPES.LESS:
                isPassed = test.actual < test.expected; // Relational operator
                break;
            default:
                errorMessage = "Unknown comparison type: " + test.type;
        }

        // Logic if-else for status tracking
        if (errorMessage) {
            errorCount++;
            globalResults.push({ name: test.name, status: "ERROR", msg: errorMessage });
        } else if (isPassed) {
            passCount++;
            globalResults.push({ name: test.name, status: "PASS" });
        } else {
            failCount++;
            globalResults.push({ name: test.name, status: "FAIL" });
        }
    } catch (e) {
        errorCount++;
        globalResults.push({ name: test.name, status: "ERROR", msg: e.message });
    }
}

// 5. While Loop: Count consecutive passes from the start
let consecutivePasses = 0;
let j = 0;
while (j < globalResults.length && globalResults[j].status === "PASS") {
    consecutivePasses++;
    j++;
}

// 6. Do...While: Find index of first failure (runs at least once)
let firstFailureIndex = -1;
let k = 0;
if (globalResults.length > 0) {
    do {
        if (globalResults[k].status === "FAIL") {
            firstFailureIndex = k;
            break; 
        }
        k++;
    } while (k < globalResults.length);
}

// 7. Summary Calculations and Reporting
const totalTests = testCases.length;
// Ternary operator for pass rate calculation (guard against zero division)
const passRate = totalTests > 0 ? (passCount / totalTests) * 100 : 0;

// Verdict Logic using logical operators
let verdict = "";
if (passCount === totalTests) {
    verdict = "✅ READY FOR RELEASE";
} else if (failCount <= 2 && failCount > 0) {
    verdict = "⚠️ REVIEW REQUIRED (Low failures)";
} else {
    verdict = "❌ BLOCK RELEASE (Critical failures)";
}

// UI Reporting
console.table(globalResults);

console.log("\n---------- FINAL REPORT ----------");
console.log(`Total Tests Executed: ${totalTests}`);
console.log(`Passed: ${passCount} | Failed: ${failCount} | Errors: ${errorCount}`);
console.log(`Pass Rate: ${passRate.toFixed(2)}%`);
console.log(`Consecutive Passes from Start: ${consecutivePasses}`);
console.log(`First Failure at Index: ${firstFailureIndex !== -1 ? firstFailureIndex : 'N/A'}`);
console.log(`Verdict: ${verdict}`);
console.log("----------------------------------");
