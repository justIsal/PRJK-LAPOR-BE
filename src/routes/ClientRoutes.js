const ClientRoute = require("../controllers/Client");
const express = require("express");
const router = express.Router()

router.post('/user', ClientRoute.createClient);
router.get('/user',ClientRoute.getAllClients);
router.get('/user/:id',ClientRoute.getClientById);
router.put('/user/:id',ClientRoute.updateClient);
router.delete('/user/:id',ClientRoute.deleteClient);

module.exports = router;