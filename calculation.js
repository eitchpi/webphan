// Calculation
document.addEventListener('DOMContentLoaded', function () {
    var value = document.querySelector(".value");
    var cost = document.querySelector(".cost_page");
    var input = document.querySelector(".input_range");

    function updateUI(value) {
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD', // Change currency 
      });
      var calculatedValue = input.value * 1489; // Change pricing per page
      value.textContent = input.value;
      cost.textContent = formatter.format(calculatedValue);

      // updateTrackFill(); // This line is removed
    }

    // Event listener for slider change
    input.addEventListener("input", (event) => {
      updateUI(value); // Update UI
    });
  });