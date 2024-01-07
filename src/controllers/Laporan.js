const Laporan = require('./../models/Laporan');
const FotoKegiatan = require('./../models/Foto_kegiatan');
const VideoKegiatan = require('./../models/Video_kegiatan');
const multer = require('multer');
const path = require('path');

const foto = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/foto_kegiatan');
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
	},
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
          cb(null, true);
        } else {
          cb(new Error('Format file tidak didukung, hanya file foto yang diizinkan'), false);
        }
    },
});
const video = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'public/video_kegiatan');
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
	},
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('video/')) {
          cb(null, true);
        } else {
          cb(new Error('Format file tidak didukung, hanya file video yang diizinkan'), false);
        }
      },
});

const fotoKegiatan = multer({ storage:foto }).single('foto');
const videoKegiatan = multer({ storage:video }).single('video');


exports.createLaporan = async(req, res) => {
  try{
    fotoKegiatan(req,res,async(err)=> {
      if (err instanceof multer.MulterError){
        return res.status(400).json({ error: 'Error uploading file' });
      } else if (err) {
        return res.status(400).json({ error: err.message });
      }
      if(req){
              const id_client = req.params.id

              const foto = await FotoKegiatan.create({path: req.file.filename});
              const laporan = await Laporan.create({
                ...req.body,id_foto_kegiatan: foto.id_foto_kegiatan,id_client: id_client
              });
              foto.id_laporan = laporan.id_laporan;
              await foto.save()
              res.status(201).json('successfully created a report')
            }
        });
    }catch(err){
      res.status(500).json({ error: 'Failed to created the report' });
    }
};


exports.getLaporanById = async(req, res) => {
    try{
      const id_client = req.params.id;
      const laporan = await Laporan.findAll({ where: { id_client: id_client } });
      if (!laporan) res.status(404).json('Laporan not found');

      res.status(200).json(laporan);
    }catch(err){
      res.status(500).json({ error: 'Failed to fetch report' });
    }
};


exports.getAllLaporan = async(req, res) => {
    try{
      const laporan = await Laporan.findAll({ });

      res.status(200).json(laporan);
    }catch(err){
      res.status(500).json({ error: 'Failed to fetch report' });
    }
}
exports.updateLaporanById = async(req, res) => {
    try{
      const id_laporan = req.params.id;

      const laporan = await Laporan.update(
        req.body,
        {where: {id_laporan: id_laporan}}
      );

      if (!laporan) res.status(404).json('Laporan not found');

      res.status(201).json('successfully updated the report');
    }catch(err){
      console.log(err)
      res.status(500).json({ error: 'Failed to update report' });
    }
}
exports.deleteLaporanById = async(req, res) => {
    try{
      const id_laporan = req.params.id;
      const deletedAdmin = await Laporan.destroy({
        where: {
          id_laporan: id_laporan 
        }
      });
      if(!deletedAdmin) res.status(404).json('Laporan not found');

      res.status(201).json('successfully delete the report')
    }catch(err){
      res.status(500).json({ error: 'Failed to delete report' });
    }
}