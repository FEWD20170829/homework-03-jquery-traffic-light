$(function() {


  $("#stopButton").click(turnRed);
  $("#slowButton").click(turnYellow);
  $("#goButton").click(turnGreen);


  function turnRed() {
    $(".bulb").css("background-color", "black");
    $("#stopLight").css("background-color", "red");
  }

  function turnYellow() {
    $(".bulb").css("background-color", "black");
    $("#slowLight").css("background-color", "yellow");
  }

  function turnGreen() {
    $(".bulb").css("background-color", "black");
    $("#goLight").css("background-color", "green");
  }

});