const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  ratingsAverage: { type: Number, default: 0 },
  rattingsQuantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  level: { type: String, required: true },
  language: { type: String, required: true },
  whatYouWillLearn: [{ type: String, required: true }],
  requirements: [{ type: String, required: true }],
  targetAudience: [{ type: String, required: true }],
  isPublished: { type: Boolean, default: false },
  isFree: { type: Boolean, default: false },
  isApproved: { type: Boolean, default: false },
  isRejected: { type: Boolean, default: false },
  isFeatured: { type: Boolean, default: false },
  isTrending: { type: Boolean, default: false },
  isBestseller: { type: Boolean, default: false },
  coverImage: { type: String, required: true },
  previewVideo: { type: String },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
}, {
  timestamps: true,
});

export const Course = mongoose.model("Course", courseSchema);
