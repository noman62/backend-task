import express from 'express'
import authenticateToken from '../middleware';
const router = express.Router()


// controllers
const { addMovie, allMovie, singleMovie } = require('../controllers/movies');



// Routes
router.post('/addMovie', authenticateToken, addMovie);
router.get('/allMovie', allMovie);
router.get('/movie/:id', singleMovie);


module.exports = router