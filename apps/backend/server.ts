import express from "express";
import { router } from "./api";
const app = express();

const cors = require("cors");
const corsOptions = { credentials: true };
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", router);

const port: number = +(process.env.PORT || 3000);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
