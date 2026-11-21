const express = require("express");

const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const upload = require("../middleware/uploadMiddleware");

const { validate } = require("../middleware/validationMiddleware");

const {
  createEventSchema,
  updateEventSchema,
} = require("../validations/eventSchemas");

const router = express.Router();

const attachUploadedImage = (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.path;
  }
  next();
};

router.get("/", getAllEvents);

router.get("/:id", getEventById);

router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  attachUploadedImage,
  validate(createEventSchema),
  createEvent,
);

router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  upload.single("image"),
  attachUploadedImage,
  validate(updateEventSchema),
  updateEvent,
);

router.delete("/:id", authMiddleware, adminMiddleware, deleteEvent);

module.exports = router;
