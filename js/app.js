$(function(){

  //call functions when button is clicked on
  $("#stopButton").click(redLight);
  $("#slowButton").click(yellowLight);
  $("#goButton").click(greenLight);

  //turn red light on

  function redLight() {

    console.log("stopLight was clicked!");

    clearLights();

    $("#stopLight").addClass("red");
  }

  //turn yellow light on

  function yellowLight() {

    console.log("slowLight was clicked!");

    clearLights();

    $("#slowLight").addClass("yellow");
  }

  //turn green light on
  function greenLight() {

    console.log("goLight was clicked!");

    clearLights();

    $("#goLight").addClass("green");
  }

  function clearLights() {
    $("#stopLight").removeClass("red");
    $("#slowLight").removeClass("yellow");
    $("#goLight").removeClass("green");
  }

});