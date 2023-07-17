const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },

    filename: (req, file, cb) => {
        let originalName = Buffer.from(file.originalname, 'latin1').toString('utf8')
        let extension = path.extname(originalName);
        let basename = path.basename(originalName, extension);
        cb(null, basename + "-" + Date.now() + extension);
    }
})

const fileNameParser = fileName => Buffer.from(fileName, 'latin1').toString('utf8');

const upload = multer({ //multer settings
    storage: diskStorage,
    fileFilter: function(req, file, callback) {
        let ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return callback(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
        callback(null, true)
    },
});

exports.upload = upload;
exports.diskStorage = diskStorage;
exports.fileNameParser = fileNameParser;
