import express, { Application } from "express";
import cors from "cors";
import bookRoutes from "./routes/book.route";
import borrowRoutes from "./routes/borrow.route";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

app.get("/", (req, res) => {
  res.send("📚 Welcome to the Library Management API 🚀");
});

export default app;
