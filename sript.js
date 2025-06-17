document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;

    // Display booking details
    const bookingDetails = `
        <h2>Booking Details</h2>
        <p><strong>From:</strong> ${from}</p>
        <p><strong>To:</strong> ${to}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
    `;
    document.getElementById('booking-details').innerHTML = bookingDetails;
});
