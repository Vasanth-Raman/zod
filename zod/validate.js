const z = require("zod");

const validateInput = (arr) => {
  const schema = z.array(z.number()); // should be an array and should be a number inside of an array
  const response = schema.safeParse(arr); // parsing it
  if (response.success) {
    return response.data;
  } else return "give valid input";
};

const array = [1, "2", 6, 4];
console.log(validateInput(array));
