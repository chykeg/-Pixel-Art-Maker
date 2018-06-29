// When size is submitted by the user, call makeGrid()
$(document).ready(function(){
	$('#sizePicker').submit(function makeGrid(grid) {

//clears previus grid and make new grid on clicking the submit button or make grid button
		$('table tr').remove();
		grid.preventDefault();

// Select size input
//calling the dom size input section for the grid and looping through it to validate grid using the user input value
		const rows= $('#inputHeight').val();
		const cols= $('#inputWidth').val();
		for (var i = 1; i <= rows; i++) {
			$('table').append('<tr></tr>');
		    for (var j = 1; j <= cols; j++) {
				$('tr:last').append('<td></td>');
				$('td').attr('class', 'cells');
			};
		};
		
// Select color input using mouse functions

		$('.cells').click(function(event){
			const color= $('#colorPicker').val();
			$(event.target).css('background-color', color);
		});
		$('.cells').dblclick(function(event){
			$(event.target).css('background', 'none');
		});
		
	});

})
	



	

// Your code goes here!




