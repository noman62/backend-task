import express from 'express'
const router = express.Router()


// controllers
import { addTvShow, allTvShow, singleTvShow } from '../controllers/tvShow'

// Routes
router.post('/addTvShow', addTvShow)
router.get('/allTvShow', allTvShow)
router.get('/tvShow/:id', singleTvShow)


module.exports = router
