import express from "express";
import { router } from "./api";
const app = express();

// cors
const cors = require("cors");
const corsOptions = { origin: ["http://10.12.19.19:5173"], credentials: true };
app.use(cors(corsOptions));

// json parsing for axios?
app.use(express.json());

//startup
const port: number = +(process.env.PORT || 3000);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

// routes
app.use("/api", router);
