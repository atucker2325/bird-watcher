// Raven's Eye - Bird Watcher App
// v1.0 - Form handling (local only, no backend yet)

document.addEventListener('DOMContentLoaded', function() {
    // Initialize date/time field with current date and time
    initializeDateTimeField();

    // Handle form submission
    const form = document.getElementById('sightingForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });
});

/**
 * Initialize the date/time field with current date and time
 * Makes it convenient for the user - they can edit if the sighting was earlier
 */
function initializeDateTimeField() {
    const now = new Date();

    // Format: YYYY-MM-DDTHH:mm
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
    document.getElementById('dateTime').value = formattedDateTime;
}

/**
 * Handle form submission
 * For v1: just shows success message
 * For v2: will save to GitHub via API
 */
function handleFormSubmit() {
    // Collect form data
    const formData = {
        birdType: document.getElementById('birdType').value,
        specificName: document.getElementById('specificName').value,
        behavior: document.getElementById('behavior').value,
        dateTime: document.getElementById('dateTime').value,
        timeOfDay: document.getElementById('timeOfDay').value,
        weather: document.getElementById('weather').value,
        conditions: document.getElementById('conditions').value,
        photoUrl: document.getElementById('photoUrl').value,
        timestamp: new Date().toISOString() // Server-side timestamp for future use
    };

    // Log to console for debugging
    console.log('Sighting logged:', formData);

    // Show success message
    showSuccessMessage();

    // Reset form
    document.getElementById('sightingForm').reset();

    // Re-initialize date/time
    initializeDateTimeField();

    // Hide success message after 5 seconds
    setTimeout(hideSuccessMessage, 5000);
}

/**
 * Show the success message
 */
function showSuccessMessage() {
    const message = document.getElementById('successMessage');
    message.classList.remove('hidden');
}

/**
 * Hide the success message
 */
function hideSuccessMessage() {
    const message = document.getElementById('successMessage');
    message.classList.add('hidden');
}
