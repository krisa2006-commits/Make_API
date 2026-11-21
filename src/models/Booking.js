const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },

    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: [true, "Event is required"],
    },

    ticketNumber: {
      type: String,
      required: [true, "Ticket Number is required"],
      unique: true,
    },

    tickets: {
      type: Number,
      required: [true, "Tickets is required"],
      min: 1,
    },

    totalAmount: {
      type: Number,
      required: [true, "Total Amount is required"],
    },

    bookingDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["confirmed", "cancelled", "completed"],
      default: "confirmed",
    },
  },
  {
    timestamps: true,
  },
);

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;



// user         → kaya user e booking kari
// event        → kaya event ni booking chhe
// tickets      → ketli tickets book kari
// totalAmount  → total price
// bookingDate  → booking kyare kari
// status       → confirmed / cancelled / completed