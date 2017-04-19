/*------------------------------------*\
    #PRIMARY NAVIGATION
\*------------------------------------*/
/**
 * Toggles active class on the primary nav item
 */

var navLink = document.querySelectorAll('.ah_js__nav-dropdown-trigger');

for (i=0; i<navLink.length; i++) {

	navLink[i].addEventListener('click',function(event){
        event.preventDefault();
        var navLinkParent = this.parentNode;

        if (navLinkParent.classList.contains('ah_is-active')) {
            navLinkParent.classList.remove('ah_is-active');
        }
        else {
            navLinkParent.classList.add('ah_is-active');
        }
	});
}
