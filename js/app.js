$(function() {

// 1. listen for click and change background of corresponding bulb

  $("#stopButton").click(redLightOn);
  $("#slowButton").click(yellowLightOn);
  $("#goButton").click(greenLightOn);

// 2. clear clear lights and then light the corresponding color

  function clearLights() {
    $("#stopLight").css("backgroundColor","black");
    $("#slowLight").css("backgroundColor","black");
    $("#goLight").css("backgroundColor","black");
  }

  function redLightOn() {
    console.log("stop light clicked");
    clearLights()
    $("#stopLight").css("backgroundColor","red");
  }

  function yellowLightOn() {
    console.log("slow light clicked")
    clearLights();
    $("#slowLight").css("backgroundColor","yellow");
  }

  function greenLightOn() {
    console.log("go light clicked");
    clearLights();
    $("#goLight").css("backgroundColor","green");
  }
  
});