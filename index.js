document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    //check the value of age input field
    const age = document.getElementById('age').value;
    if (age < 18) {
        alert('You must be at least 18 years old to proceed with the checkout.');
        return; // Stop the form submission
    }
    else{
        alert('Form submitted successfully!');
    }
});
