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
   let total=result.reduce((acc,cv)=>acc+cv.population,0)
   console.log(result)
   console.log(total)
      }
   

/*
RESULT:7777721563 
*/      
 