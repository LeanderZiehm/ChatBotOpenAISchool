$(document).ready(function(){

$('#action_menu_btn').click(function(){$('.action_menu').toggle();});



//$('#send_btn').click(function(){alert("AAAAAA");});


$('#send_btn').click(function(){

	 var textArea = $('textarea');

	const pre = '<div class="d-flex justify-content-end mb-4"> <div class="msg_cotainer_send">'
 	const dre = '<span class="msg_time_send">9:10 AM, Today</span> </div> <div class="img_cont_msg"> <img src="user.svg" class="rounded-circle user_img_msg"> </div> </div>'


	$('#chatSpace').append(pre+textArea.val()+dre);
	textArea.val('');

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




