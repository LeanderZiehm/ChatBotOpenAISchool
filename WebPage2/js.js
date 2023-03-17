const preUser = '<div class="user">'
const preBot = '<div class="bot">'
const end = '</div>'


$(document).ready(function(){

//$('#send_btn').click(function(){alert("AAAAAA");});

$('textarea').keyup(function(event) {
    if (event.keyCode === 13) {
        $("#send_btn").click();
    }
});


$('#send_btn').click(function(){

	 var textArea = $('textarea');
	 var text = textArea.val();

	 if(text == '') return;

	$('#chatSpace').append(preUser+text+end);
	textArea.val('');

	// request chatbot

	$('#chatSpace').append(preBot+"lol"+end);

});
	



});

// $(document).ready(function(){

// 	$('#action_menu_btn').click(function(){$('.action_menu').toggle();});


// 	$('#send_btn').click(function(){
// alert("AAAAAA");


// // 	// Find the chat box element
// // const chatSpace = document.querySelector('#chatSpace');

// // // Create a new message
// // const newMessage = document.createElement('div');
// // newMessage.textContent = 'Hello, world!';

// // // Add the new message to the chat box
// // chatSpace.appendChild(newMessage);

	
// });




