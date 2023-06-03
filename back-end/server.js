const express = require("express");
const app = express()
const cors = require("cors");
const PORT = 5000

app.use(
  cors()
);

app.get('/', (req, res) => {
    res.json({data: "hello"})
    console.log(`---------  GET REQUEST IS HERE --------- `)
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });