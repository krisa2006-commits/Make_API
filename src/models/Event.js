const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },

    description: {
      type: String,
      required: [true, "description is required"],
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "category is required"],
    },

    image: {
      type: String,
      requierd: [true, "image is required"],
    },

    date: {
      type: Date,
      required: [true, "date is required"],
    },

    time: {
      type: String,
      required: [true, "time is required"],
    },

    location: {
      type: String,
      required: [true, "location is required"],
    },

    price: {
      type: Number,
      required: [true, "price is required"],
    },

    totalSeats: {
      type: Number,
      required: [true, "totalSeats is required"],
    },

    availableSeats: {
      type: Number,
      required: [true, "availableSeats is required"],
    },

    organizer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "organizer is required"],
    },

    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed", "cancelled"],
      default: "upcoming",
    },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;


// title          → Event nu naam
// description    → Event vishe details
// category       → Event ni category
// image          → Event image URL
// date           → Event date
// time           → Event time
// location       → Event kya thase
// price          → Ticket price
// totalSeats     → Total seats
// availableSeats → Baki seats
// organizer      → Event create karnaar user/admin
// status         → Upcoming/Ongoing/Completed/Cancelled