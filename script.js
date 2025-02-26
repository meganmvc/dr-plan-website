
// Example data for applications
const applications = ["511 Web and 511 Phone", "AASHTOWare BAMS DSS", "AASHTOWare Bridge Management", "AASHTOWare Bridge Rating", "AASHTOWare Metro Plant Inspection (MPI)", "AASHTOWare Pavement ME Design", "AASHTOWare Project Data Analytics", "AASHTOWare Project (all modules)", "AASHTOWare Sync Service", "Acquia Cloud Platform Plus/The Interchange (replacing iHub)", "ArcGIS for Aviation", "ARMER (Allied Radio Matrix for Emergency Response System)", "Aspen", "Autodesk and AutoCAD for Buildings", "Bentley Projectwise", "Building Automation Supervision", "Building Automation System Web Control (WebCtrl)", "CARS (Condition Acquisition Auditing Tracking System)", "Data Practices Information Request", "Django", "eDocs", "ENERCALC", "Georilla", "Gopher State One Call and One Call Concepts", "Guard-eFOTM", "IRIS (Intelligent Roadway Information System)", "Kinetic Signals", "M5 Fleet Mgmt Sys/Equip Mgmt Sys", "Option 31", "Minneota Superload", "MnCORS-Continously Operating Reference Station and Virtual Reference Station", "MnDOT Warehouse", "Motor Carrier Info System (MCIS)", "Niagara AX-Building Automation (AX and N4 - two applications)", "P2000 Badge Access", "Professional Flight Manager (PFM)", "RCA-Recource Consumption Application and Work Order Mgmt Sys", "REALMS-Right of Way Electronic Acquisition and Land Mgmt Sys", "Record Center", "RISA-3D", "RTMCNet", "Seasonal Load Limits", "Traffic Video Service", "Transportation Asset Management Sys (TAMS)", "Trimble GPS Pathfinder Office 5.85", "www.dot.state.mn.us (internet sites)"];

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
