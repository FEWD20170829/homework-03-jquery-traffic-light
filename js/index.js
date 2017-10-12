$(function(){

    $('#stopButton').click(switchRed);
    $('#slowButton').click(switchYellow);
    $('#goButton').click(switchGreen);


    function ClearLights() {
       $('.bulb').css('background-color', 'black'); 
     }

    function switchRed(){
        ClearLights();
        $('#stopLight').css('background-color','red');
     }

     function switchYellow(){
       ClearLights();
       $('#slowLight').css('background-color','yellow')
     }

     function switchGreen(){
       ClearLights();
       $('#goLight').css('background-color','green')
     }
  
});

// function ClearLights() {
//   $('#traffic-light').css('background-color', 'black');
// }

// $('#stopButton').click(switchRed);

// function switchRed(){
//   ClearLights()
// 	$('#stopLight').css('background-color','red');
// }

// $('#slowButton').click(switchYellow);

// function switchYellow(){
//   ClearLights()
// 	$('#slowLight').css('background-color','yellow')
// }

// $('#goButton').click(switchGreen);

// function switchGreen(){
//   ClearLights()
// 	$('#goLight').css('background-color','green')
// }


// });