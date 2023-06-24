import Movie from "../models/movies"

//Add Movie
export const addMovie = async (req, res) => {
    
    try {
   
        if (req.role && req.role !== 'admin') {
            return res.status(403).json({ message: 'Not authorized' });
          }

        // Save movie in database
        const newMovie = new Movie(req.body)
        await newMovie.save().then(movie => {
            console.log('New movie----->', movie)
        })

        return res.json({ ok: true })
    } catch (err) {
        console.log(err)
        return res.status(400).send('Error. Try again.')
    }
}

//fetch all movie from the database
export const allMovie = async (req, res) => {
    const all = await Movie.find().exec()
    res.json(all)
}

//get a single Movie
export const singleMovie= async (req, res) => {
    try {
        const movieId = req.params.id;

        Movie.findById(movieId, (err, movie) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!movie) {
                return res.status(404).json({ error: 'Movie not found' });
            }

            res.json(movie);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}