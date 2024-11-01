import express from "express";
import cors from "cors";
import morgan from "morgan";
import httpStatus from "http-status";
import Routes from "./routes/index.js";

const app = express();

// middle-wares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// app.use(cookieParser());

// Define your routes first
app.get("/", (req, res) => {
    res.json({ message: "server is running" });
});

//routes
app.use("/api/v1", Routes);

// 404 not found handler
app.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).send({
        code: httpStatus.NOT_FOUND,
        message: "not found",
        success: false,
    });
});

export default app;

