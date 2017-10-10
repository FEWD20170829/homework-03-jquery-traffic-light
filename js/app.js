$(document).ready(function() {

  $('#stopButton').click(stopLight);
  $('#slowButton').click(slowLight);
  $('#goButton').click(goLight);

  function stopLight() {
  $("#stopButton").attr('class', 'red');
  console.log('clicked on stopButton')

  }

  function slowLight() {
    $('#slowButton').attr('class', 'yellow');
  }

  function goLight() {
    $("#goButton").attr('class', 'green');

  }
  
