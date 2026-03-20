// Sample API response times in milliseconds
const responseTimes = [150, 600, 450, 300, 800, 200, 550, 100, 480];
const slaThreshold = 500;

let min = Infinity;
let max = -Infinity;
let totalTime = 0;
let breachCount = 0;
let i = 0;

// While loop for analysis
while (i < responseTimes.length) {
    let current = responseTimes[i];

    // Tracking min/max
    if (current < min) min = current;
    if (current > max) max = current;

    // Summing for average
    totalTime += current;

    // Counting SLA breaches (>500ms)
    if (current > slaThreshold) {
        breachCount++;
    }

    i++;
}

// Calculations
const average = totalTime / responseTimes.length;

// Performance Report
console.log("--- API Performance Report ---");
console.log(`Total Requests: ${responseTimes.length}`);
console.log(`Min Time: ${min}ms`);
console.log(`Max Time: ${max}ms`);
console.log(`Average Time: ${average.toFixed(2)}ms`);
console.log(`SLA Breaches (>500ms): ${breachCount}`);
console.log("------------------------------");
