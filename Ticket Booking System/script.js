document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const event = document.getElementById("event").value;
  const tickets = document.getElementById("tickets").value;

  if (!name || !event || !tickets || tickets <= 0) {
    alert("Please fill in all the fields correctly!");
    return;
  }

  const outputHTML = `
    <h2>✅ Booking Confirmed!</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Event:</strong> ${event}</p>
    <p><strong>Tickets:</strong> ${tickets}</p>
    <p>🎉 Enjoy your event!</p>
  `;

  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = outputHTML;
});
