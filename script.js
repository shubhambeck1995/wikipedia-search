
$(document).ready(function() {
var long;
var lat;
var url;




  function requestLocation(a,b){
    navigator.geolocation.getCurrentPosition(function(position) {
      var long=position.coords.longitude;
      var lat=position.coords.latitude;
      var key="fb09c094ce134b828e2418b4853dab1f";
      url = "https://crossorigin.me/https://api.darksky.net/forecast/"+key+"/"+lat+","+long+a;

     console.log("inside long"+ long);
     console.log(url);
     // .......................................................
      $.getJSON(url, function(result){
        console.log(result.currently.temperature);
      $("#temperature").html(result.currently.temperature + b);
      $("#summary").html(result.currently.summary);
      $("#icon").attr("class","wi wi-forecast-io-"+ result.currently.icon);
      $("#humdity").html(result.currently.humidity);
      $("#pressure").html(result.currently.pressure);

      }); // close json request
//       .............................................

});

} //close request location function

  if ("geolocation" in navigator) {
    query="?units=us";
    unit="°F";
    requestLocation(query,unit);
  }
  else{
    console.log(" Gelocation is not available");
  }
  $("#cels").on("click",function(){
    query="?units=si";
    unit="°C";
    requestLocation(query,unit);
  });
  $("#fahr").on("click",function(){
    query="?units=us";
    unit="°F";
    requestLocation(query,unit);
  });
  $(".toggle").on("click",function(){

    
  });

});  //close jquey document ready
