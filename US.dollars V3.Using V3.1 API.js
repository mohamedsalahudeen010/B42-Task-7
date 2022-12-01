//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02:initiate a request
request.open("GET","https://restcountries.com/v3.1/all");
//step 03 :sending the request
request.send();
//step 04 : once the data successfully loaded from the server
request.onload=function(){
   var res=request.response;
   var result=JSON.parse(res)
   console.log(result)
   const countriesWithUsDollars=result.filter(element => {
      for (let key in element.currencies){
         if(element.currencies[key].name==="United States dollar"){
            console.log(element.name.common)
         }
      }
      } ) 
   }

   /*
 Ecuador
 British Indian Ocean Territory
 Puerto Rico
 Timor-Leste
 Cambodia
 United States Virgin Islands
 Micronesia
 American Samoa
 Marshall Islands
 Bahamas
 Northern Mariana Islands
 Guam
 El Salvador
 Panama
 United States
 Palau
 Turks and Caicos Islands
 British Virgin Islands
 United States Minor Outlying Islands
 Caribbean Netherlands  */