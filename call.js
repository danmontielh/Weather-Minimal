$(function() {
 


var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = "&APPID=48a7608071709ecc97ff4fb5e31d12cb";
/* Call API IPLOCATION*/
$.getJSON('http://geoip-db.com/json/geoip.php?jsonp=?') 
         .done (function(location){
         	/*  SET VARIABLE COUNTRY, CITY AND API KEY*/
         	var country = "," + location.country_code;        	
			/*  SET VARIABLE/PARAMETER TO FUNCTION GET API WEATHER*/
         	var apiWeather = api + location.city +country + apiKey;
         	
         	$(".text-weather").html(location.city + country);
    
         	getApi(apiWeather);
});

/* GET API  OPEN WEATHER MAPFUNCTION */
function getApi(api){

    $.getJSON(api).done(function(data){
	  	var temperature = Math.round(data.main.temp);
    	var tempCelsius = Math.round(temperature - 273.15);
        var weatherDesc = data.weather[0].description;
    	 $(".temp-weather").html(tempCelsius + "°");
        $(".desc-weather").html(weatherDesc);
        if (weatherDesc == "scattered clouds") {
            $(".icon-weather").html("D");
        } else if (weatherDesc == "clear sky") {
            $(".icon-weather").html("A");
        } else if (weatherDesc == "few clouds") {
            $(".icon-weather").html("C");
        } else if (weatherDesc == "broken clouds"){
            $(".icon-weather").html("F");
        } else if (weatherDesc == "shower rain") {
             $(".icon-weather").html("R");
        } else if (weatherDesc === "rain") {
            $(".icon-weather").html("");

        } else if (weatherDesc == "snow") {
            $(".icon-weather").html("W");
        } else if (weatherDesc == "mist") {
            $(".icon-weather").html("N");
        }

    })

   }

   });


  



