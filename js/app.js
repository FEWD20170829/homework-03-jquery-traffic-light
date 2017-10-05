$(function() {
  // 1. listen for a click event

  $("#stopButton").click(redLight);
  $("#slowButton").click(yellowLight);
  $("#goButton").click(greenLight);


  function redLight() {
    $("#stopLight").css("background-color", "red");
    $("#bulb").css("backgroundColor", "black");
  }


  function yellowLight() {
    $("#slowLight").css("background-color", "yellow");
    $("#bulb").css("backgroundColor", "black");
  }  

  function greenLight() {
    $("#goLight").css("background-color", "green");
    $("#bulb").css("backgroundColor", "black");
  }

  function clearLights() {
    $("#stopLight").css("background-color" , "black");
    $("#slowLight").css("background-color" , "black");
    $("#goLight").css("background-color" , "balck");
  }


});