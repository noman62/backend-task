import mongoose from 'mongoose'
const { Schema } = mongoose
const { ObjectId } = Schema

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    role:{
      type: String,
      enum: ['user', 'admin', 'guest'],
      default: 'admin',
    }
  },
  { timestamps: true }
)

export default mongoose.model('User', userSchema)
