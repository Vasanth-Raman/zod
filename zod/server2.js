const express = require("express");
const z = require("zod");
const app = express();
const port = 3001;

app.use(express.json());

const validateUser = (obj) => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
  return response;
};

app.post("/sign-up", (req, res) => {
  const response = validateUser(req.body);
  console.log(response);
  if (!response.success) {
    res.json({
      msg: "Enter valid input",
    });
  } else {
    res.status(200).json({
      msg: "Ok",
      state: "All good good to go",
    });
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App is up and running at ${port}`);
  }
});
