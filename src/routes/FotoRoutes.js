const FotoKegiatan = require('./../controllers/Foto_kegiatan');
const router = require('express').Router();

router.get('/foto_kegiatan/:id',FotoKegiatan.getFotoByLaporanId);

module.exports = router;