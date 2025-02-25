const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
const { Readable } = require('stream');

dotenv.config();

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploadImage = async (req, res) => {
    try {
      
        if (!req.file) {
            return res.status(400).json({ message: 'No image file provided' });
        }

        // Cloudinary upload options (folder add karein)
        const uploadOptions = {
            resource_type: 'auto',
            folder: req.body.folder,// Yeh woh folder hai jahan image save hogi
            quality: 'auto:good',       // Compression (60-80% quality)
            fetch_format: 'auto'
        };

        // Upload stream with folder
        const stream = cloudinary.uploader.upload_stream(
            uploadOptions, // Options mein folder include karein
            (error, result) => {
                if (error) {
                    return res.status(500).json({ message: error.message });
                }
                res.status(200).json({ 
                    Folder: req.body.folder,
                    imageUrl: result.secure_url
                    
                });
            }
        );

        // Buffer stream create karein
        const bufferStream = new Readable();
        bufferStream.push(req.file.buffer);
        bufferStream.push(null);

        // Stream pipe karein
        bufferStream.pipe(stream);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteimgs = async (req, res) => {
    try {
        const { imageUrl,Foldername } = req.body;
    
        if (!imageUrl) {
          return res.status(400).json({ message: 'Image URL is required' });
        }
    
        const publicId = Foldername +'/'+ imageUrl.split('/').pop().split('.')[0];
        const act=await cloudinary.uploader.destroy(publicId);
    
        res.status(200).json({ message: act });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};