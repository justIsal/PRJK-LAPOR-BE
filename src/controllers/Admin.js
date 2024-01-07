const Admin = require("../models/Admin");
const bcrypt = require('bcrypt');


exports.createAdmin = async (req, res) => {
	try {
		const hashedPassword = await bcrypt.hash(req.body.password, 10);
		const admin = Admin.create({ ...req.body, password: hashedPassword });
		res.status(201).json(admin);
	} catch (err) {
		res.status(500).json({ error: 'Failed to create Admin' });
		console.log(err);
	}
};

exports.getAllAdmins = async (req, res) => {
	try {
		const admins = await Admin.findAll();
		res.status(200).json(admins);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch admins' });
	}
};

exports.getAdminById = async (req, res) => {
	try {
		const id = req.params.id
		// const admin = await Admin.findAll({
		// 	where: {
		// 	  id: req.params.id
		// 	}
		// })
		const admin = await Admin.findByPk(id);
		if (!admin) {
			return res.status(404).json({ error: 'Admin not found' });
		}
		res.status(200).json(admin);
	} catch (error) {
		res.status(500).json({ error: 'Failed to fetch admin' });
	}
};

exports.updateAdmin = async (req, res) => {
	try {
		const adminData = req.body;
		const admin = await Admin.update(adminData, {
			where: {
			  id: req.params.id
			}
		});
		if (!admin) {
			return res.status(404).json({ error: 'Admin not found' });
		}
		res.status(200).json(admin);
	} catch (error) {
		res.status(500).json({ error: 'Failed to update admin' });
	}
};

exports.deleteAdmin = async (req, res) => {
	try {
		const admin = await Admin.destroy({
			where: {
			  id: req.params.id
			}
		  });
		if (!admin) {
			return res.status(404).json({ error: 'Admin not found' });
		}
		res.status(200).json({ message: 'Admin deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: 'Failed to delete admin' });
	}
};
