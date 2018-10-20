// check off specific to dos by clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass('complete');
});
// click on trash icon to delete to do
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});
// add a new to do from the input when enter is pressed
$("input[type = 'text']").keypress(function(event){
	if(event.which===13){
		// grab new todo text from input
		var todotext = $(this).val();
		$(this).val("");
		// create new li and add to ul
		$('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todotext + '</li>');
	}
});

$('.fa-plus-circle').click(function(){
	$("input[type = 'text']").fadeToggle();
})

