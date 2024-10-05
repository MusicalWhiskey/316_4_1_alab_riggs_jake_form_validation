console.log("316.4.1 Form Validation ALAB");
//================================================

document.getElementById("registration").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Fetch the username input value
    const usernameInput = document.querySelector('input[name="username"]');
    const username = usernameInput.value.trim(); // Remove leading/trailing spaces

    // Validate the username
    if (username === "") {
        showError("Username cannot be blank.");
    } else if (username.length < 4) {
        showError("Username must be at least four characters long.");
    } else if (hasDuplicateCharacters(username)) {
        showError("Username must contain at least two unique characters.");
    } else if (containsSpecialCharacters(username)) {
        showError("Username cannot contain special characters or whitespace.");
    } else {
        // Username is valid! Proceed with registration logic.
        // You can remove the error display here.
        // ...
    }
});

// Helper function to check for duplicate characters
function hasDuplicateCharacters(str) {
    const charSet = new Set(str);
    return charSet.size < str.length;
}

// Helper function to check for special characters
function containsSpecialCharacters(str) {
    const regex = /[!@#$%^&*()_+={}\[\]:;<>,.?~\\|]/;
    return regex.test(str);
}

// Display an error message
function showError(message) {
    const errorDisplay = document.getElementById("errorDisplay");
    errorDisplay.innerText = message;
}

//================================================