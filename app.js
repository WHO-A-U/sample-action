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
// TODO: Add integration test for TodoActionsMain.
//
// Code that interface with external data have been separated into their own modules.
// These includes:
//
// - `DataStore`
// - `CodeRepository`
// - `TaskManagementSystem`
// - `chain thing`
//
// They can be mocked by creating a mock version using `__mocks__` folder.
// https://jestjs.io/docs/en/manual-mocks

app.get("/", (req, res) => {
  const greeting = ` ${os.hostname()} ${os.type()}`   
  res.send(`ubuntu-3 <br> ${greeting} <br> num : ${getNum()}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
