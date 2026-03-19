// Demonstrating 'const' for fixed, unchanging values
const NUM_USERS_TO_GENERATE = 15;
const ROLES = ['admin', 'editor', 'viewer', 'tester', 'manager'];
const DOMAIN = '@example.com';

// Demonstrating 'var' for a globally scoped counter (as requested)
var totalActiveUsers = 0;
var totalInactiveUsers = 0;

function generateTestData(count) {
    // Demonstrating 'let' for block-scoped variables that change
    let testDataResults = [];

    // Demonstrating 'let' for the loop variable 'i'
    for (let i = 1; i <= count; i++) {
        // Generate formatted ID like USR-0001
        let formattedId = 'USR-' + String(i).padStart(4, '0');
        
        let userName = 'Test User ' + i;
        let userEmail = 'testuser' + i + DOMAIN;
        
        // Cycle through the roles array sequentially using modulo operator
        let roleIndex = (i - 1) % ROLES.length;
        let userRole = ROLES[roleIndex];
        
        // Every 3rd user should be inactive for edge case testing
        let isUserActive = true;
        if (i % 3 === 0) {
            isUserActive = false;
            totalInactiveUsers++; // Updating global var
        } else {
            totalActiveUsers++;   // Updating global var
        }
        
        // Create user object and add to the results array
        testDataResults.push({
            id: formattedId,
            name: userName,
            email: userEmail,
            role: userRole,
            isActive: isUserActive
        });
    }

    return testDataResults;
}

// Generate the sample data
let mockUsers = generateTestData(NUM_USERS_TO_GENERATE);

// Output the results cleanly to the console
console.log("========== MOCK FORM TEST DATA ==========");
console.table(mockUsers);

console.log("\n================ SUMMARY ================");
console.log("Total Active Users (tracked via var): " + totalActiveUsers);
console.log("Total Inactive Users (tracked via var): " + totalInactiveUsers);
