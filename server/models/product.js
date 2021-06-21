const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      text: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      trim: true,
      text: true,
    },
    price: {
      type: Number,
      trim: true
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    subs: [
      {
        type: ObjectId,
        ref: "Sub",
      },
    ],
    sold: {
      type: String,
      enum: ["Yes", "No"],
    },
    images: {
      type: Array,
    },
    color: {
      type: String,
      enum: ["Black", "Brown", "Silver", "White", "Blue"],
    },
    year:{
        type:Number
    },
    engine:{
        type:String
    },
    fuel:{
        type:String
    },
    mileage:{
        type:String,
        required:true
    },
    condition:{
        type:String,
        enum:["Used","New"]
    },
    carfax:{
        type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
