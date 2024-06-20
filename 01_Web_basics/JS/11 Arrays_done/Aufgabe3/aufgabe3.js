// closestToZero.js

// Function to find the temperature closest to zero
function closestToZero(temperatures) {
  if (temperatures.length === 0) return 0;

  // Initialize the closest temperature to the first temperature in the array
  let closest = temperatures[0];

  for (let temp of temperatures) {
    // If the current temperature is closer to zero, or equally close but positive, update closest
    if (
      Math.abs(temp) < Math.abs(closest) ||
      (Math.abs(temp) === Math.abs(closest) && temp > closest)
    ) {
      closest = temp;
    }
  }

  return closest;
}

// Example input
const temperatures = [1, -2, -8, 4, 5];
console.log("Input:", temperatures);

// Get the output by finding the temperature closest to zero
const output = closestToZero(temperatures);
console.log("Output:", output);
