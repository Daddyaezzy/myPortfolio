const express = require("express");
const formRoute = require("./form");
const cors = require("cors");

const app = express();

// Parse JSON request bodies
app.use(cors());

app.use(express.json());

// Use the form route
app.use("/", formRoute);

// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
