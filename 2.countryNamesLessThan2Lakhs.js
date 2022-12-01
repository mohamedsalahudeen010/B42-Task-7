//Step 1:
let request = new XMLHttpRequest();
//Step 2:
request.open("GET", "https://restcountries.com/v3.1/all");
//Step 3:
request.send();
//Step 4:
request.onload = function () {
  var res=request.response;
   var result=JSON.parse(res)
   console.log(result)
  let populationLessThanTwoLakhs = result.filter((popu) => popu.population < 200000).map((ele) => ele.name.common);
  console.log(populationLessThanTwoLakhs);
};

/*
RESULT:
0: "Aruba"
1: "Wallis and Futuna"
2: "Åland Islands"
3: "Pitcairn Islands"
4: "Seychelles"
5: "French Southern and Antarctic Lands"
6: "Christmas Island"
7: "Saint Martin"
8: "Heard Island and McDonald Islands"
9: "Antarctica"
10: "Greenland"
11: "British Indian Ocean Territory"
12: "Saint Lucia"
13: "Niue"
14: "Saint Barthélemy"
15: "Grenada"
16: "Isle of Man"
17: "Curaçao"
18: "Dominica"
19: "Faroe Islands"
20: "Montserrat"
21: "Cook Islands"
22: "Bermuda"
23: "San Marino"
24: "Cayman Islands"
25: "Cocos (Keeling) Islands"
26: "United States Virgin Islands"
27: "Norfolk Island"
28: "Nauru"
29: "Bouvet Island"
30: "Micronesia"
31: "American Samoa"
32: "Anguilla"
33: "Marshall Islands"
34: "Kiribati"
35: "Northern Mariana Islands"
36: "Guam"
37: "Gibraltar"
38: "Vatican City"
39: "Jersey"
40: "Tuvalu"
41: "Saint Helena, Ascension and Tristan da Cunha"
42: "Samoa"
43: "Guernsey"
44: "Tonga"
45: "Saint Kitts and Nevis"
46: "Falkland Islands"
47: "Palau"
48: "Turks and Caicos Islands"
49: "British Virgin Islands"
50: "Liechtenstein"
51: "Andorra"
52: "Tokelau"
53: "Sint Maarten"
54: "United States Minor Outlying Islands"
55: "Antigua and Barbuda"
56: "Saint Pierre and Miquelon"
57: "Saint Vincent and the Grenadines"
58: "South Georgia"
59: "Caribbean Netherlands"
60: "Monaco"
61: "Svalbard and Jan Mayen"
length: 62 
 */
