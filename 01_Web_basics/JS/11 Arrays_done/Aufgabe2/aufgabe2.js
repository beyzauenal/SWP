// invertBits.js

// Function to invert a bit sequence
function invertBits(bitSequence) {
  // Split the string into an array, map each bit to its inverse, and join back into a string
  return bitSequence
    .split("")
    .map((bit) => (bit === "0" ? "1" : "0"))
    .join("");
}

// Example input
const input = "000111000";
console.log("Input:", input);

// Get the output by inverting the bits
const output = inverbits(input);
console.log("Output:", output);
