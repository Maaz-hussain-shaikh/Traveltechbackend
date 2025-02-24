const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// 🔥 Cloudinary Configuration (For Production)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 📌 Define "uploads/" directory (For Local Storage)
const uploadDir = path.join(__dirname, "..", "uploads");

// 📌 Ensure "uploads/" folder exists (Only for local use)
if (!process.env.VERCEL) {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log("✅ 'uploads/' folder created locally!");
  }
}

// 🔥 Storage Setup: Use Local Storage or Cloudinary
const storage = process.env.VERCEL
  ? new CloudinaryStorage({
      cloudinary,
      params: {
        folder: "uploads", // Change this to your Cloudinary folder
        allowed_formats: ["jpg", "jpeg", "png"],
      },
    })
  : multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, uploadDir); // ✅ Save in "uploads/" (Only locally)
      },
      filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
      },
    });

// 🔥 File Filter - Only Allow Images
const fileFilter = (req, file, cb) => {
  console.log("Uploading File:", file.originalname); // ✅ Debugging log

  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("❌ Only images are allowed!"), false);
  }
};

// 🔥 Multer Upload Config
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // ✅ Max 5MB file size
  },
});

module.exports = upload;