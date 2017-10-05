$(function() { 
  
    $("#stopButton").click(turnBulbRed);
    $("#slowButton").click(turnBulbYellow);
    $("#goButton").click(turnBulbGreen);

  function turnBulbRed() { 
    clearLights();
    $("#stopLight").css("background-color", "red");
  }  

  function turnBulbYellow() {
    clearLights();
    $("#slowLight").css("background-color", "yellow");
  } 

  function turnBulbGreen() {
    clearLights();
    $("#goLight").css("background-color", "green");
  }

  function clearLights() {
    $("#stopLight").css("background-color", "black");
    $("#slowLight").css("background-color", "black");
    $("#goLight").css("background-color", "black");
  }

});