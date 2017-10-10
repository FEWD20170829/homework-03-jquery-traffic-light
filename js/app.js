$(function(){

  //call functions when button is clicked on
  $("#stopButton").click(redLight);
  $("#slowButton").click(yellowLight);
  $("#goButton").click(greenLight);

  //turn red light on

  function redLight() {

    clearLights();

    $("#stopLight").addClass("on");
  }

  //turn yellow light on

  function yellowLight() {

    clearLights();

    $("#slowLight").addClass("on");
  }

  //turn green light on
  function greenLight() {

    clearLights();

    $("#goLight").addClass("on");
  }

  function clearLights() {
    $(".bulb").removeClass("on");
    // $("#slowLight").removeClass("on");
    // $("#goLight").removeClass("on");
  }

});