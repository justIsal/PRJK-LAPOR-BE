const AdminRoute = require("../controllers/Admin");
const express = require("express");
const router = express.Router()

router.post('/admin', AdminRoute.createAdmin);
router.get('/admin',AdminRoute.getAllAdmins);
router.get('/admin/:id',AdminRoute.getAdminById);
router.put('/admin/:id',AdminRoute.updateAdmin);
router.delete('/admin/:id',AdminRoute.deleteAdmin);

module.exports = router;