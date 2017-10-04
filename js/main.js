$(function () {

  $("#stopButton").click(illuminateRed);
  function illuminateRed() {
    clearLights();
    $("#stopLight").css("backgroundColor", "red");
  }

  $("#slowButton").click(illuminateYellow);
  function illuminateYellow() {
    clearLights();
    $("#slowLight").css("backgroundColor", "yellow");
  }

  $("#goButton").click(illuminateGreen);
    function illuminateGreen() {
      clearLights();
      $("#goLight").css("backgroundColor", "green");
    }

  function clearLights() {
    $("#stopLight").css("backgroundColor", "black");
    $("#slowLight").css("backgroundColor", "black");
    $("#goLight").css("backgroundColor", "black");
  }
});
