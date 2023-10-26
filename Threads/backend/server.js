import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import UserRoutes from "./routes/UserRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//Routes
app.use("/api/users", UserRoutes);

app.listen(PORT, ()=>console.log(`Server started at https://localhost:${PORT}`));