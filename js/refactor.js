$(function(){ 

  $("#stopButton").click(turnRed);
  // console.log("when i press stop button do this");

  function turnRed() {
    $(".bulb").css("background-color","black");
    $("#stopLight").css("background-color","red");
  }

  $("#slowButton").click(turnYellow);

  function  turnYellow() {
    $(".bulb").css("background-color","black");
    $("#slowLight").css("background-color","yellow");
  }

  $("#goButton").click(turnGreen);

  function turnGreen() {
    $(".bulb").css("background-color","black");
    $("#goLight").css("background-color","green");
    
  }




});