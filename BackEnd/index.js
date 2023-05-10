import { config } from 'dotenv'
import http from "http";
import app from "./src/app/app.js";
import './src/conf/database.js'

config();

const server = http.createServer(app);
const httpServer = server.listen(process.env.PORT || 3000);
console.log("Server Runnig in http://localhost:",process.env.PORT);