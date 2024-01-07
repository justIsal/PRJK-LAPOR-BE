const LaporanRoute = require("../controllers/Laporan");
const express = require("express");
const router = express.Router()

router.post('/laporan/:id', LaporanRoute.createLaporan);
router.get('/laporan/:id', LaporanRoute.getLaporanById);
router.get('/laporan', LaporanRoute.getAllLaporan);
router.put('/laporan/:id', LaporanRoute.updateLaporanById);
router.delete('/laporan/:id', LaporanRoute.deleteLaporanById);

module.exports = router;