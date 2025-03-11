import * as dotenv from "dotenv";
dotenv.config();
import * as express from "express";
const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
