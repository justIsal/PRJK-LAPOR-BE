const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const autHeader = req.headers['authorization'];
    const token = autHeader && autHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401);
    jwt.verify(token,process.env.ATS,(err,decoded)=> {
        if(err) return res.sendStatus(403);
        req.email = decoded.email
        next()
    })
}
module.exports = authenticateToken