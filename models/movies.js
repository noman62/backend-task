import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  actors: { type: String },
  director: { type: String },
  producer: { type: String },
  runtime: { type: Number },
});

export default mongoose.model('Movie', movieSchema)
