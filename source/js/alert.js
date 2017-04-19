/*------------------------------------*\
    #ALERT
\*------------------------------------*/

/**
 * 1) Closes alert message on click
 */
$('.js-alert-btn').click(function(e){
	e.preventDefault();
	$(this).parent().remove();
});
