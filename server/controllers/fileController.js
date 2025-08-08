const multer = require('multer');
const path = require('path');

// Set up storage engine
const storage = multer.diskStorage({
  destination: './server/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

// Initialize upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // 10MB limit
}).single('myFile'); // 'myFile' is the name of the form field

exports.uploadFile = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ msg: err });
    } else {
      if (req.file == undefined) {
        res.status(400).json({ msg: 'No file selected!' });
      } else {
        res.json({
          msg: 'File uploaded successfully!',
          file: `uploads/${req.file.filename}`,
        });
      }
    }
  });
};
