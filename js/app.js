$(function() {

  // Listen for clicks
  $("#stopButton").click(stopLight);
  $("#slowButton").click(slowLight);
  $("#goButton").click(goLight);

  // Change lights
  function stopLight() {
    resetBulbs();
    $("#stopLight").css("backgroundColor", "red");
  }

  function slowLight() {
    resetBulbs();
    $("#slowLight").css("backgroundColor", "yellow");
  }

  function goLight() {
    resetBulbs();
    $("#goLight").css("backgroundColor", "green");
  }

  // Clear the bulbs
  function resetBulbs() {
    $(".bulb").css("backgroundColor", "#111111");
  }

});