/*
  script.js
  ===========================
  This file contains the JavaScript for the interactive web page assignment.
*/

// =================================================================
// PART 1: Event Handling - Light/Dark Mode Toggle
// =================================================================

// Get the button and the body elements
const modeToggleBtn = document.getElementById('mode-toggle-btn');
const body = document.body;

// Add a click event listener to the button
modeToggleBtn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Change the button text based on the current theme
    if (body.classList.contains('dark-mode')) {
        modeToggleBtn.textContent = 'Toggle Light Mode';
    } else {
        modeToggleBtn.textContent = 'Toggle Dark Mode';
    }
});

// =================================================================
// PART 2: Interactive Elements - FAQ Accordion
// =================================================================

// Get all elements with the class 'faq-question'
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    // Add a click event listener to each question
    question.addEventListener('click', () => {
        // Find the corresponding answer element (the next sibling element)
        const answer = question.nextElementSibling;

        // Toggle the 'max-height' CSS property to show/hide the answer
        if (answer.style.maxHeight) {
            // If the answer is visible, hide it by setting max-height to null
            answer.style.maxHeight = null;
            answer.style.padding = '0 18px';
        } else {
            // If the answer is hidden, show it by setting max-height to its full height
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.padding = '18px';
        }
    });
});

// =================================================================
// PART 3: Form Validation
// =================================================================

// Get form and input elements
const registrationForm = document.getElementById('registration-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

// Get error message elements
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const successMsg = document.getElementById('success-msg');

// Function to validate email format using a simple regular expression
const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Add a submit event listener to the form
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    let formIsValid = true;

    // Reset error and success messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    successMsg.textContent = '';

    // Validate Name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        formIsValid = false;
    }

    // Validate Email
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        formIsValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address.';
        formIsValid = false;
    }

    // Validate Password (e.g., must be at least 8 characters)
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        formIsValid = false;
    }

    // If all validation checks pass
    if (formIsValid) {
        successMsg.textContent = 'Form submitted successfully!';
        registrationForm.reset(); // Clear the form fields
    }
});