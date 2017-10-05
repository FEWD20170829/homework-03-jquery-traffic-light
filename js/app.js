$(function() {
  // 1. listen for a click event

  $("#stopButton").click(redLightOn);
  $("#slowButton").click(yellowLightOn);
  $("#goButton").click(grennLightOn);


  function redLightOn() {
    console.log("stop light clicked on");
    clearLights()
    $("#stopLight").css("backgroundColor", "red");
  }


  function yellowLightOn() {
    console.log('slow light clicked on');
    clearLights();
    $("#slowButton").css("backgroundColor", "yellow");
  }  

  function greenLightOn() {
    console.log('go light clicked on');
    clearLights();
    $("#goButton").css("backgroundColor", "green");
  }

  function clearLights() {
    $("#stopLight").css("backgroundColor" , "black");
    $("#slowLight").css("backgroundColor" , "black");
    $("#goLight").css("backgroundColor" , "balck");
  }


});