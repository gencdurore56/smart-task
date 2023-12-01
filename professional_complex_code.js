/*
Filename: professional_complex_code.js
This code demonstrates a professional and complex implementation
of a web-based restaurant reservation system.
*/
// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");
const mongoose = require("mongoose");

// Create the web server
const app = express();

// Configure server
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect("mongodb://localhost/restaurantReservation", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Define reservation schema and model
const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: Date,
  numGuests: Number,
});
const Reservation = mongoose.model("Reservation", reservationSchema);

// Create reservation endpoint
app.post("/api/reservation", (req, res) => {
  const { name, email, date, numGuests } = req.body;
  
  // Validate reservation details
  if (!name || !email || !date || !numGuests) {
    return res.status(400).json({ error: "Invalid reservation details." });
  }
  
  // Check availability
  const reservationDate = moment(date);
  const now = moment();
  if (!reservationDate.isAfter(now)) {
    return res.status(400).json({ error: "Reservation must be in the future." });
  }
  
  const maxGuests = 50;
  Reservation.find({ date: { $eq: reservationDate.toDate() } }).then((reservations) => {
    const totalGuests = reservations.reduce((acc, curr) => acc + curr.numGuests, 0);
    if (totalGuests + numGuests > maxGuests) {
      return res.status(400).json({ error: "Restaurant is fully booked on this date." });
    }
    
    // Save reservation
    const newReservation = new Reservation({ name, email, date, numGuests });
    newReservation.save().then(() => {
      return res.status(201).json({ message: "Reservation created successfully." });
    }).catch((error) => {
      return res.status(500).json({ error: "Failed to save reservation." });
    });
  }).catch((error) => {
    return res.status(500).json({ error: "Failed to check availability." });
  });
});

// Get all reservations endpoint
app.get("/api/reservations", (req, res) => {
  Reservation.find().then((reservations) => {
    return res.status(200).json(reservations);
  }).catch((error) => {
    return res.status(500).json({ error: "Failed to fetch reservations." });
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});