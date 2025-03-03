import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import mongoose from "mongoose";
import route from "./routes/playerRoutes.js";

const app = express();

app.use(bodyParser.json());

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database successful.")
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((error)=>console.log(error))

app.use("/api/players", route); 