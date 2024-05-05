const multer = require("multer");
const path = require("path");

const MINE_TYPE_IMAGE = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
  "image/svg+xml": "svg",
};

const MINE_TYPE_VIDEO = {
  "video/mp4": "mp4",
  "video/mkv": "mkv",
  "video/avi": "avi",
  "video/mov": "mov",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MINE_TYPE_IMAGE[file.mimetype] || MINE_TYPE_VIDEO[file.mimetype];
    if (!isValid) {
      cb({ message: "Invalid mime type" }, false);
    }
    if (MINE_TYPE_IMAGE[file.mimetype]) {
      cb(null, "src/uploads/images");
    }
    if (MINE_TYPE_VIDEO[file.mimetype]) {
      cb(null, "src/uploads/videos");
    }
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("_");
    cb(null, Date.now() + path.extname(name));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;