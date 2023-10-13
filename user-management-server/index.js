const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const users = [
  { id: 1, name: "Rakiba", email: "rakiba@gmail.com" },
  { id: 2, name: "Mahbub", email: "mahbub@gmail.com" },
  { id: 3, name: "Rimi", email: "rimi@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User managent server is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
