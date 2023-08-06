const axios = require("axios");
const fs = require("fs");
const CircularJSON = require("circular-json");

const canKill = false;



// const validateData = (resposne, war) => {
//   resposne.forEach((element) => {
//     console.log("Data is => " + element.id + " and override = " + element.override+" and war is =" + war);
//     if (
//       element.id != "696bf4f6-0ba3-11ee-be56-0242ac120002" &&
//       element.override != true
//     ) {
//       console.log(
//         "Available data is => " + element.id + " and war is => " + war
//       );
//     }
//   });
// };

var sizeProfiles = ['01feeb56-3842-4b30-acf4-78d24c27c18f',
'0c7c6bcf-784f-439a-beb7-58e3273a5108',
'26e26538-158b-44e5-a410-b13320a8a211',
'2737673b-90d6-49c6-8e8b-4592f22ad571',
'297e483b-645e-4884-8120-c3f812468133',
'49592186-d6e5-46b4-b119-c4da02c0864d',
'5226a414-2ce5-45e5-8655-6937e7a97ee5',
'8bce9134-17bf-4e7b-b27d-818721b1c5fe',
'92d3b872-2ab6-4143-9f45-1287110282ff',
'99af5c1a-c0c3-4d73-ae35-3c9fb42ebe6e',
'b2df4b48-c2a6-48cb-a5c7-03ad0d1f418c',
'ba142caf-93b6-4e69-bbd2-93814b5c7b8e',
'bc71c215-3b2d-4238-a49e-ce95425c91f7',
'bce09893-7e62-49e5-8f85-c5518a8dc2cf',
'c264a969-0bdf-49ba-af19-a4e90352d2bc',
'cd9f6cb6-0d6c-4b00-a703-698ec4bbd94c',
'd10023e7-f60a-40cc-8048-5a9504ba23d9',
'dc8b5151-efde-4e02-ae2d-e17e5bfe892c',
'f64a23af-ad94-4488-9a8f-704b3feec71d',
'f8d4adf6-4a0e-4411-acff-f3a0d867bbe0',
'fb9ae1d1-661a-4319-90c9-4ce82bfcb25d'];




 function custom(war) {
  
    axios
      .get(
        `https://test.api.azeus.gaptech.com:443/inventory-analytics/size-profile-service/size-profiles/${war}`,
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: "M4Ouh8nZfS351g9rQxBdp1KhwAuiV0R2",
          },
        }
      )
      .then((response) => {
     
         console.log("Response -> "  + response.status);

      })
      .catch((error) => {
       // return error.status;
       
       console.log("Errore -> "  + error.message);
      });
  }
  
   function inventory(war) {
    //   console.log("Hello 1");
    
    // https://stage.api.azeus.gaptech.com/plan-analytics/size-profiles/357501eb-20a2-5d0c-95b2-4813b51017d0
    // let url = `https://stage.api.azeus.gaptech.com:443/plan-analytics/size-profiles/${war}`;
    // let url = `https://stage.api.azeus.gaptech.com:443/inventory-analytics/size-profile-service/size-profiles/${war}`;
    let url = `https://stage.api.azeus.gaptech.com:443/plan-inventory-strategy/custom-size-profiles/${war}`;

  
    // console.log("URL =>" + url);
      axios
        .get(
          url,
          {
            headers: {
              "Content-Type": "application/json",
              apiKey: "M4Ouh8nZfS351g9rQxBdp1KhwAuiV0R2",
            },
          }
        )
        .then((response) => {
          //console.log("Hello 2", response.data);
          // validateData(response.data,war);
          // return response.status;
          console.log("Response -> "  + response.status+" id is =>"+war);
        })
        .catch((error) => {
          // return error.status;
          console.log("Errore -> "  + error.message+" id is=>"+ war);
        });
    }
  
     function analytics(war) {
      //   console.log("Hello 1");
        axios
          .get(
            `https://test.api.azeus.gaptech.com:443/plan-inventory-strategy/custom-size-profiles/${war}`,
            {
              headers: {
                "Content-Type": "application/json",
                apiKey: "M4Ouh8nZfS351g9rQxBdp1KhwAuiV0R2",
              },
            }
          )
          .then((response) => {
            //console.log("Hello 2", response.data);
            //validateData(response.data,war);
            console.log("Success -> "  + response);
          })
          .catch((error) => {

            console.log("Errore -> "  + error.message);
          });
      }


for (let i = 0; i < sizeProfiles.length; i++) {
//   console.log("This is SizeRangeId=>");
// console.log("Data is =>"+ sizeProfiles[i]);
  //  custom(sizeProfiles[i])
  inventory(sizeProfiles[i])
  // analytics(sizeProfiles[i])
  // console.log("Custom =>" + result1+" and Inventory =>" + result2+" and ANalytics ->"+ result3);
  
  
  //    console.log("Size is => " + apiCalls.length);
}

function writeDataIntoAFile(data, fileName) {


  fs.writeFile(fileName, data, (err) => {
    if (err) {
      //console.error('Error writing file:', err);
    } else {
      //console.log('File write successful!');
    }
  });
}
