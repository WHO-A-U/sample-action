const os = require('os');
const express = require('express');

const app = express();
const port = 3000;

const getNum = () => {
  let num = 1;
  for (let i = 1; i <= 99999; i++) {
    num += i;
  }
  return num;
};

app.get("/", (req, res) => {
  const greeting = ` ${os.hostname()} ${os.type()}`   
  res.send(`ubuntu-3 <br> ${greeting} <br> num : ${getNum()}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
