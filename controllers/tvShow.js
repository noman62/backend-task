import TvShow from "../models/tvShow"

//Add TvShow in database
export const addTvShow = async (req, res) => {
    try {

        // Save TvShow in database
        const newTvShow = new TvShow(req.body)
        await newTvShow.save().then(tvshow => {
            console.log('New TvShow----->', tvshow)
        })

        return res.json({ ok: true })
    } catch (err) {
        console.log(err)
        return res.status(400).send('Error. Try again.')
    }
}

//fetch all TvShow from the database
export const allTvShow = async (req, res) => {
    const all = await TvShow.find().exec()
    res.json(all)
}

//get a single TvShow
export const singleTvShow = async (req, res) => {
    try {
        const TvShowId = req.params.id;

        TvShow.findById(TvShowId, (err, TvShow) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!TvShow) {
                return res.status(404).json({ error: 'TvShow not found' });
            }

            res.json(TvShow);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}





