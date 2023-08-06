const fs = require("fs");
var data = {
  RESULTS: {
    ROW: [
      {
        COLUMN: [
          { abc: "Rakesh" },
          { pqr: "Hello" },
          { abcd: "Hello" },
          { str: "HEllo" },
          ,
        ],
      },
      {
        COLUMN: [
          { abc: "Rakesh" },
          { pqr: "Hello" },
          { abcd: "Hello" },
          { str: "HEllo" },
          ,
        ],
      },
    ],
  },
};

// for (let key in data) {
//   let rowValue = data[key];
// console.log("Row value is =>", (rowValue));
//   for (let i = 0; i < rowValue.length; i++) {
//     let columnValue = rowValue[0][COLUMN];
//     console.log("Results : ", columnValue[abc]);
//     console.log("Results : ", columnValue[pqr]);
//     console.log("Results : ", columnValue[abcd]);
//     console.log("Results : ", columnValue[str]);
//   }
// }

var data = {
  RESULTS: {
    ROW: [
      {
        COLUMN: [
          { abc: "Rakesh" },
          { pqr: "Hello" },
          { abcd: "Hello" },
          { str: "Hello" },
        ],
      },
      {
        COLUMN: [
          { abc: "Rakesh" },
          { pqr: "Hello" },
          { abcd: "Hello" },
          { str: "Hello" },
        ],
      },
    ],
  },
};

// Accessing the "COLUMN" key values
data.RESULTS.ROW.forEach((row) => {
  let innerLoopCount = 0;
  let name;
  let operation;
  let tempalte;
  let URN;
  row.COLUMN.forEach((column) => {
    Object.keys(column).forEach((key) => {
      console.log("Inner loop", innerLoopCount);
      if (innerLoopCount == 0) {
        name = column[key];
        innerLoopCount++;
      } else if (innerLoopCount == 1) {
        operation = column[key];
        innerLoopCount++;
      } else if (innerLoopCount == 2) {
        tempalte = column[key];
        innerLoopCount++;
      } else if (innerLoopCount == 3) {
        URN = column[key];
        innerLoopCount++;
      }
    });
  });
  let delteQuery = `delete from rest_template WHERE NAME='${name}'`+"\n";
  let insertQuery = `INSERT INTO REST_TEMPLATE(NAME,OPERATION,TEMPLATE,URN) VALUES('${name}','${operation}','${tempalte}','${URN}')`+"\n";;
  writeDataIntoAFile(delteQuery,'response.txt')
  writeDataIntoAFile(insertQuery,'response.txt');
  
});


function writeDataIntoAFile(data, fileName) {


    fs.appendFile(fileName, data, (err) => {
      if (err) {
    
      } else {

      }
    });
  }