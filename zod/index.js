const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ msg: "everthing is fine" });
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is ip and running successfully at port ${port}`);
  }
});
