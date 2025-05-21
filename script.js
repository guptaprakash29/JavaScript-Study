// Example with return inside a loop
function testLoop() {
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      return; // Exits the function when i equals 3
    }
    console.log("i = " + i);
  }
}

testLoop();
