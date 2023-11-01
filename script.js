// Get the input element with the id "date"
let userInput = document.getElementById("date");

// Set the maximum date of the input to the current date
userInput.max = new Date().toISOString().split("T")[0];

// Get the element with the id "result" for displaying the result
let result = document.getElementById("result");

// Function to calculate age based on the entered date
function calculateAge() {
  // Convert the input value (birthdate) to a Date object
  let birthDate = new Date(userInput.value);

  // Extract day, month, and year components of the birthdate
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1; // Months are zero-based
  let y1 = birthDate.getFullYear();

  // Get the current date
  let today = new Date();

  // Extract day, month, and year components of the current date
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1; // Months are zero-based
  let y2 = today.getFullYear();

  // Variables to store the calculated age components
  let d3, m3, y3;

  // Calculate the difference in years
  y3 = y2 - y1;

  // Check if the current month is greater than or equal to the birth month
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    // Adjust the age components if the birth month is ahead of the current month
    y3--;
    m3 = 12 + m2 - m1;
  }

  // Check if the current day is greater than or equal to the birth day
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    // Adjust the age components if the birth day is ahead of the current day
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }

  // Handle a special case where months become negative
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  // Display the calculated age in the result element
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old`;
}

// Function to get the number of days in a month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
