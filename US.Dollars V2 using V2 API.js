//step 01:create an XHR object
var request = new XMLHttpRequest();
//step 02:initiate a request
request.open("GET", "https://restcountries.com/v2/all");
//step 03 :sending the request
request.send();
//step 04 : once the data successfully loaded from the server
request.onload = function () {
  var res = request.response;
  var result = JSON.parse(res);
  console.log(result);
  const countriesWithUsDollars = result.filter((element) => {
    for (let key in element.currencies) {
      if (element.currencies[key].code === "USD") {
        console.log(element.name);
      }
    }
  });
};

/*
RESULT 
American Samoa
US.Dollars V2.js:15 Bonaire, Sint Eustatius and Saba
US.Dollars V2.js:15 British Indian Ocean Territory
US.Dollars V2.js:15 Virgin Islands (British)
US.Dollars V2.js:15 Virgin Islands (U.S.)
US.Dollars V2.js:15 Cambodia
US.Dollars V2.js:15 Ecuador
US.Dollars V2.js:15 El Salvador
US.Dollars V2.js:15 Guam
US.Dollars V2.js:15 Marshall Islands
US.Dollars V2.js:15 Micronesia (Federated States of)
US.Dollars V2.js:15 Northern Mariana Islands
US.Dollars V2.js:15 Palau
US.Dollars V2.js:15 Panama
US.Dollars V2.js:15 Puerto Rico
US.Dollars V2.js:15 Timor-Leste
US.Dollars V2.js:15 Turks and Caicos Islands
US.Dollars V2.js:15 United States of America
*/