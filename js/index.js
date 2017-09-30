$(document).ready(function(){

// red light on
  $('#stopButton').click(redLight);

  function redLight () {
    $('.bulb').css('background-color','black')
    $('#stopLight').css('background-color','red');
  }

// yellow light on


  $('#slowButton').click(yellowLight);

    function yellowLight () {
      $('.bulb').css('background-color','black')
      $('#slowLight').css('background-color','yellow');
    }



// green light on

  $('#goButton').click(greenLight);

    function greenLight () {
      $('.bulb').css('background-color','black')
      $('#goLight').css('background-color','green');
    }


});