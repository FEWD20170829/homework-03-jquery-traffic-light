$(document).ready(function() {

  $("#stopButton").click(redLight);
  $("#slowButton").click(yellowLight);
  $("#goButton").click(greenLight);

  function redLight() {
    clearLights();
    $("#stopLight").css("background-color", "red");
    $("#bulb").css("backgroundColor", "black");
  
  }

  function yellowLight() {
    clearLights();
    $("#slowLight").css("background-color", "yellow");
    $("#bulb").css("backgroundColor", "black");

  }

  function greenLight() {
    clearLights();
    $("#goLight").css("background-color", "green");
    $("#bulb").css("backgroundColor", "black");
  }

  function clearLights() {

    $("#stopLight").css("background-color" , "black");
    $("#slowLight").css("background-color" , "black");
    $("#goLight").css("background-color" , "black");
  }


});
  
