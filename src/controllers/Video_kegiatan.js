const VideoKegiatan= require('./../models/Video_kegiatan');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/video_kegiatan');
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
	},
});
const upload = multer({ storage });
exports.createVideoByLaporanId = (req,res) => {
}
exports.getVideoByLaporanId = (req,res) => {
}
exports.updateVideoByLaporanId = (req,res) => {
}
exports.deleteVideoByLaporanId = (req,res) => {
}
