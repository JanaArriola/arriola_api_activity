const express = require('express');
const router = express.Router();

// Import the Controller
const { 
    getAllRooms, 
    createRoom, 
    getRoomById, 
    updateRoom, 
    deleteRoom,
    createGuest,
    createBooking,
    getBookingById,
} = require('../controllers/controller');


// Routes
router.get('/rooms', getAllRooms);
router.post('/rooms', createRoom);
router.get('/rooms/:id', getRoomById);
router.put('/rooms/:id', updateRoom);
router.delete('/rooms/:id', deleteRoom);

// Guests
router.post('/guests', createGuest);

// Bookings
router.post('/bookings', createBooking);
router.get('/bookings/:id', getBookingById);

module.exports = router;


