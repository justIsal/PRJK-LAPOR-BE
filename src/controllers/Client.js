const Client = require("../models/Client");
const bcrypt = require('bcrypt');

exports.createClient = async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const client = await Client.create({ ...req.body, password: hashedPassword });
		res.status(201).json({...req.body,id_client: client.id_client});
	} catch (err) {
		res.status(500).json({ error: 'Failed to create user' });
		console.log(err);
	}
};

exports.getAllClients = async (req, res) => {
	try {
		const client = await Client.findAll({ });
		res.status(200).json(client);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch user' });
	}
};

exports.getClientById = async (req, res) => {
	try {
		// const client = await Client.findAll({
		// 	where: {
		// 	  id: req.params.id
		// 	}
		// })
		const client = await client.findByPk(id);
		if (!client) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.status(200).json(client);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch user' });
	}
};

exports.updateClient = async (req, res) => {
	try {
		const clientData = req.body;
		const client = await Client.update(clientData, {
			where: {
			  id_client: req.params.id
			}
		});
		if (!client) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.status(200).json({message: "User update succefully", data: client},);
	} catch (error) {
		res.status(500).json({ error: 'Failed to update user' });
	}
};

exports.deleteClient = async (req, res) => {
	try {
		const client = await Client.destroy({
			where: {
			  id: req.params.id
			}
		  });
		if (!client) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.status(200).json({ message: 'User deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: 'Failed to delete User' });
	}
};
