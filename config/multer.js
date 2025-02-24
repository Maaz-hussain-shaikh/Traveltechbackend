const multer = require("multer");
const path = require("path");
const fs = require("fs");

// 📌 Ensure "uploads/" folder exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true }); // Folder create if not exists
}

// Storage Setup - Storing Files Temporarily
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Temporary folder for image uploads
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

// File Filter - Only Allow Images
const fileFilter = (req, file, cb) => {
  console.log("Uploading File:", file.originalname); // ✅ Debugging log

  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

// Multer Upload Config
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // ✅ Max 5MB file size
  },
});

module.exports = upload;
