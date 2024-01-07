const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require('./src/config/db');
const app = express();
const AdminRoute = require('./src/routes/AdminRoutes')
const ClientRoute = require('./src/routes/ClientRoutes');
const LaporanRoute = require('./src/routes/LaporanRoutes');
const FotoRoute = require('./src/routes/FotoRoutes');
const Login = require('./src/routes/LoginRoutes');

require('dotenv').config();
app.use(cookieParser())
app.use(express.json());
 app.use(cors());
// app.use(
// 	cors({
// 		origin: 'http://localhost:8081',
// 		credentials: true,
// 	})
// );
const connectDB = async () => {
    try{

        await db.authenticate();
        console.log('nyambung gass')
    }catch(err) {
        console.log(err)
    }
}
connectDB();
app.use(Login);
app.use(AdminRoute);
app.use(ClientRoute);
app.use(LaporanRoute);
app.use(FotoRoute);
app.listen(process.env.APP_PORT,()=> {
    console.log(`listening on port ${process.env.APP_PORT}`)
});