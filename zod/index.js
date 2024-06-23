const express = require("express");
const z = require("zod");
const app = express();
const port = 3000;
const schema = z.array(z.number());

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "everthing is fine" });
});

app.post("/health-checkup", (req, res) => {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "not ok",
      suggestion: "put valid input",
    });
    return;
  } else {
    res.send(response);
  }

  //   const kidndeyLength = kidneys.length;

  //   res.send(`You have ${kidndeyLength} kidney's`);
  // it is ok
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is ip and running successfully at port ${port}`);
  }
});
