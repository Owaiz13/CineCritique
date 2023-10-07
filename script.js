document.addEventListener("DOMContentLoaded", function() {
    const reviewTextarea = document.getElementById("review");
    const submitButton = document.getElementById("submit-button");
    const resetButton = document.getElementById("reset-button");

    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function() {
        const reviewText = reviewTextarea.value;

        // Check if the review text is not empty
        if (reviewText.trim() !== "") {
            // Send the review data to the server-side script for email sending (not implemented here)
            // You would typically make an AJAX request or submit a form to a server endpoint.
            // Here, we're just showing an alert for demonstration purposes.
            alert("Review submitted: " + reviewText);

            // Clear the review textarea
            reviewTextarea.value = "";
        } else {
            alert("Please enter a review before submitting.");
        }
    });

    // Add a click event listener to the reset button
    resetButton.addEventListener("click", function() {
        // Clear the review textarea
        reviewTextarea.value = "";
    });
});
