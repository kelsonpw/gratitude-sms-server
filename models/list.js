import mongoose from 'mongoose';

const listSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  from: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  items: [
    {
      item: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

export default mongoose.model('List', listSchema);
