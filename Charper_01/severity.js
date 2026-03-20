function classifyBug(frequency, impact) {
    let priority = "Invalid";

    // Normalize inputs to lowercase
    const f = frequency.toLowerCase();
    const i = impact.toLowerCase();

    if (f === "always") {
        if (i === "blocker") priority = "P0";
        else if (i === "major") priority = "P1";
        else if (i === "minor") priority = "P2";
    } else if (f === "often") {
        if (i === "blocker") priority = "P1";
        else if (i === "major") priority = "P2";
        else if (i === "minor") priority = "P3";
    } else if (f === "rarely") {
        if (i === "blocker") priority = "P2";
        else if (i === "major") priority = "P3";
        else if (i === "minor") priority = "P4";
    }

    return priority;
}

// Example Usage:
console.log(classifyBug("always", "blocker")); // Output: P0
console.log(classifyBug("often", "major"));    // Output: P2
console.log(classifyBug("rarely", "minor"));   // Output: P4
