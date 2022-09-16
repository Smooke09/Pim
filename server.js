import express from "express";
import { resolve } from "path";
import path from "path";
const app = express();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

//Estaticos rotamento dos componentes
app.use("/", express.static(resolve(__dirname, "dist")));
app.get("/*", (req, res) => {
  res.sendFile(resolve(__dirname, "dist/index.html"));
});

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server is running on port 3000");
});
