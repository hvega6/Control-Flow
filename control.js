// Constants
const PI = 3.1415; // Value of PI
const RADIUS = 5; // Radius of the circular area in meters
const AREA = PI * RADIUS * RADIUS; // Calculate the area of the circle
const PLANT_SPACE = 0.8; // Space required for each plant in square meters
const INITIAL_PLANTS = 20; // Initial number of plants
const MAX_CAPACITY = AREA / PLANT_SPACE; // Maximum number of plants that can fit in the area

// Part 1: Growing Pains
// Week 1
const PLANTS_AFTER_1_WEEK = INITIAL_PLANTS * Math.pow(2, 1); // Calculate plants after 1 week
let CAPACITY_PERCENTAGE_1 = (PLANTS_AFTER_1_WEEK / MAX_CAPACITY) * 100; // Calculate capacity percentage
CAPACITY_PERCENTAGE_1 = Math.min(CAPACITY_PERCENTAGE_1, 100); // Cap at 100%

let action1; // Variable to store action for week 1
if (CAPACITY_PERCENTAGE_1 > 80) {
    action1 = "Pruned"; // Action if over 80% capacity
} else if (CAPACITY_PERCENTAGE_1 >= 50) {
    action1 = "Monitored"; // Action if between 50% and 80% capacity
} else {
    action1 = "Planted"; // Action if under 50% capacity
}

console.log("After 1 week:");
console.log(`Plants: ${PLANTS_AFTER_1_WEEK}`);
console.log(`Capacity: ${CAPACITY_PERCENTAGE_1.toFixed(2)}%`);
console.log(`Action: ${action1}`);

// Week 2
const PLANTS_AFTER_2_WEEKS = INITIAL_PLANTS * Math.pow(2, 2); // Calculate plants after 2 weeks
let CAPACITY_PERCENTAGE_2 = (PLANTS_AFTER_2_WEEKS / MAX_CAPACITY) * 100; // Calculate capacity percentage
CAPACITY_PERCENTAGE_2 = Math.min(CAPACITY_PERCENTAGE_2, 100); // Cap at 100%

let action2; // Variable to store action for week 2
if (CAPACITY_PERCENTAGE_2 > 80) {
    action2 = "Pruned"; // Action if over 80% capacity
} else if (CAPACITY_PERCENTAGE_2 >= 50) {
    action2 = "Monitored"; // Action if between 50% and 80% capacity
} else {
    action2 = "Planted"; // Action if under 50% capacity
}

console.log("\nAfter 2 weeks:");
console.log(`Plants: ${PLANTS_AFTER_2_WEEKS}`);
console.log(`Capacity: ${CAPACITY_PERCENTAGE_2.toFixed(2)}%`);
console.log(`Action: ${action2}`);

// Week 3
const PLANTS_AFTER_3_WEEKS = INITIAL_PLANTS * Math.pow(2, 3); // Calculate plants after 3 weeks
let CAPACITY_PERCENTAGE_3 = (PLANTS_AFTER_3_WEEKS / MAX_CAPACITY) * 100; // Calculate capacity percentage
CAPACITY_PERCENTAGE_3 = Math.min(CAPACITY_PERCENTAGE_3, 100); // Cap at 100%

let action3; // Variable to store action for week 3
if (CAPACITY_PERCENTAGE_3 > 80) {
    action3 = "Pruned"; // Action if over 80% capacity
} else if (CAPACITY_PERCENTAGE_3 >= 50) {
    action3 = "Monitored"; // Action if between 50% and 80% capacity
} else {
    action3 = "Planted"; // Action if under 50% capacity
}

console.log("\nAfter 3 weeks:");
console.log(`Plants: ${PLANTS_AFTER_3_WEEKS}`);
console.log(`Capacity: ${CAPACITY_PERCENTAGE_3.toFixed(2)}%`);
console.log(`Action: ${action3}`);

