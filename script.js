
// Example data for applications
const applications = ["App 1", "App 2", "App 3", "App 4"];

// Populate the dropdown with application names
const appDropdown = document.getElementById('applicationDropdown');
applications.forEach(app => {
    const option = document.createElement('option');
    option.value = app;
    option.textContent = app;
    appDropdown.appendChild(option);
});

// Handle form submission
document.getElementById('app-selection-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the page from reloading
    const selectedApp = appDropdown.value;
    if (selectedApp) {
        alert(`You selected: ${selectedApp}`);
        // Redirect or load next page/form as needed
        // For example: window.location.href = `/form.html?app=${selectedApp}`;
    } else {
        alert("Please select an application.");
    }
});
