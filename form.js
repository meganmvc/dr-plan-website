// Get the query parameter for the selected application
const urlParams = new URLSearchParams(window.location.search);
const selectedApp = urlParams.get('app');
document.getElementById('selectedAppName').textContent = selectedApp || "No application selected";

// Handle "Other" button toggling behavior
const toggleInputField = (checkboxId, inputId) => {
    const checkbox = document.getElementById(checkboxId);
    const inputField = document.getElementById(inputId);

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            inputField.style.display = 'inline';
        } else {
            inputField.style.display = 'none';
        }
    });
};

// Initialize "Other" buttons
toggleInputField('teams-other', 'teams-other-input');
toggleInputField('technology-other', 'technology-other-input');
toggleInputField('backup-frequency-other', 'backup-frequency-other-input');
toggleInputField('replication-other', 'replication-other-input');
toggleInputField('database-language-other', 'database-language-other-input');

// Handle form submission
document.getElementById('dr-input-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the page from reloading
    
    // Gather form data
    const formData = new FormData(event.target);
    let formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });

    // Example: Save the data (you could replace this with an actual save action, e.g., API call)
    alert("Disaster Recovery Information Submitted!");

    // Redirect to the thank you page
    window.location.href = `thankyou.html?app=${selectedApp}`;
});

