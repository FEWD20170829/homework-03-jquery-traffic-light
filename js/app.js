$(function(){
  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);

  function illuminateRed() { 
    $(".bulb").css("backgroundColor" , "black");
    $('#stopLight.bulb').css("backgroundColor" , "red");    
  }

  function illuminateYellow() { 
    $(".bulb").css("backgroundColor" , "black");
    $('#slowLight.bulb').css("backgroundColor" , "yellow");    
  }

  function illuminateGreen() { 
    $(".bulb").css("backgroundColor" , "black");
    $('#goLight.bulb').css("backgroundColor" , "green");    
  }

});