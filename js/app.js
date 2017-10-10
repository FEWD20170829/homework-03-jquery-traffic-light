$(function(){

  //call functions when button is clicked on
  $("#stopButton").click(redLight);
  $("#slowButton").click(yellowLight);
  $("#goButton").click(greenLight);

  //turn red light on

  function redLight() {

    console.log("stopLight was clicked!");

    clearLights();

    $("#stopLight").addClass("on");
  }

  //turn yellow light on

  function yellowLight() {

    console.log("slowLight was clicked!");

    clearLights();

    $("#slowLight").addClass("on");
  }

  //turn green light on
  function greenLight() {

    console.log("goLight was clicked!");

    clearLights();

    $("#goLight").addClass("on");
  }

  function clearLights() {
    $(".bulb").removeClass("on");
    // $("#slowLight").removeClass("on");
    // $("#goLight").removeClass("on");
  }

});