$(function(){

$('#stopButton').click(switchRed);

function switchRed(){
	$('#stopLight').css('background-color','red');
}

$('#slowButton').click(switchYellow);

function switchYellow(){
	$('#slowLight').css('background-color','yellow')
}

$('#goButton').click(switchGreen);

function switchGreen(){
	$('#goLight').css('background-color','green')
}


});