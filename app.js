
var xhr = new XMLHttpRequest();

xhr.open("GET", 'https://restcountries.com/v3.1/all', true);

xhr.onload = function(){
    if(xhr.status === 200){
        var responseData= JSON.parse(xhr.responseText);        
        responseData.forEach(
            function(resData){
                console.log("Flag of ",resData.name.common, "country is",resData.flags.png);
                document.write("County Name: ",resData.name.common,", Region Name: ", resData.region ,", SubRegion Name: ", resData.subregion,", Popolation: ", resData.population,);
                document.write("<br>");
                
            })}}
xhr.send();