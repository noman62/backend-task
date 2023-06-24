import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const  tvShowSchema= new mongoose.Schema({
  title: { type: String, required: true },
  actors: { type: String },
  director: { type: String },
  producer: { type: String },
  runtime: { type: Number },
});

export default mongoose.model('TVShow', tvShowSchema);
