import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
dotenv.config();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    app.listen(port, () => console.log(`✅ Server Running on Port ${port}`));
  })
  .catch((err) => console.log("❌MongoDB Connection error", err));
