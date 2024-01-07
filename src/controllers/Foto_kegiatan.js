const FotoKegiatan = require('./../models/Foto_kegiatan');
const Laporan = require('./../models/Laporan');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/foto_kegiatan');
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
	},
    
});

const upload = multer({ storage });
const imagesDir = path.join(__dirname, './../../public/foto_kegiatan');
// exports.createFotoByLaporanId = async(req,res) => {
// 	const id_laporan = req.params.laporanId;
// 	try {
// 		const laporan = await Laporan.findOne({ where: { id: id_laporan } });
// 		if (!laporan) {
// 			return res.status(404).json({ error: 'Laporan not found' });
// 		}

// 		upload.single('foto')(req, res, async (err) => {
// 			if (err instanceof multer.MulterError) {
// 				return res.status(400).json({ error: 'Error uploading file' });
// 			} else if (err) {
// 				return res.status(400).json({ error: err.message });
// 			}
// 			console.log(req.file)
// 			// const materi = new Materi({ ...req.body, courseId });
//             const foto = FotoKegiatan.create({...req.body, id_laporan,path: req.file})
// 			// if (req.file) {
// 			// 	materi.file = {
// 			// 		filename: req.file.filename,
// 			// 		mimetype: req.file.mimetype,
// 			// 		path: req.file.path,
// 			// 	};
// 			// }


// 			// course.materi.push(materi);
// 			// await course.save();

// 			res.status(201).json(materi);
// 		});
// 	} catch (err) {
// 		res.status(400).json({ error: 'Gagal membuat materi baru' });
// 	}
// }

exports.getFotoByLaporanId = async(req,res) => {
	try{
		const id_foto = req.params.id;

		const fotoKegiatan = await FotoKegiatan.findByPk(id_foto);
		if (!fotoKegiatan) {
			return res.status(404).json({ error: 'Admin not found' });
		}
		const namefile = fotoKegiatan.path;
	  	const imagePath = path.join(imagesDir, namefile);
		res.status(200).sendFile(imagePath);
	}catch(err){
	  	console.log(err);
	}
}
// exports.updateFotoByLaporanId = (req,res) => {
// }
// exports.deleteFotoByLaporanId = (req,res) => {
// }
