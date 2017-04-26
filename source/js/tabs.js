/*------------------------------------*\
    #PRIMARY NAVIGATION
\*------------------------------------*/
/**
 * Tabs Activation
 * 1) Add active class to the first tab and panel by default
 * 2) Add and remove active class to tabs depending on which one you click on
 */

(function(){

	var tabContainer = document.querySelectorAll('.ah_js_tabs');
	var tabBtn = document.querySelectorAll('.ah_js_tab');
	var tabContent = document.querySelectorAll('.ah_js_tabs-panel');

	for (i=0; i<tabContainer.length; i++) {
		var tabFirst = tabContainer[i].querySelector('.ah_js_tab:first-child');
		var tabPanelFirst = tabContainer[i].querySelector('.ah_js_tabs-panel:first-child');
		tabFirst.classList.add('ah_is-active'); /* 1 */
		tabPanelFirst.classList.add('ah_is-active'); /* 1 */
	}

	for (i=0; i<tabBtn.length; i++) {
		tabBtn[i].addEventListener('click', function (e) {
			e.preventDefault();
			openTab(this);
		});
	}

	function openTab(el) {
		thisHref = el.getAttribute('href');

		var tabParent = el.parentNode.parentNode.parentNode;
		var tabBtns = tabParent.querySelectorAll('.ah_js_tab');

		for (j=0; j<tabBtns.length; j++) {
			tabBtns[j].classList.remove('ah_is-active'); /* 2 */
		}

		el.classList.add('ah_is-active'); /* 2 */

		var newHref = document.querySelector(thisHref);
		var newerHref = newHref.querySelector('.ah_js_tabs-panel');
		var firstLink = newHref.querySelector('.ah_js_tab');
		if (firstLink) {
			firstLink.classList.add('ah_is-active');
		}

		var tabsPanel = tabParent.querySelectorAll('.ah_js_tabs-panel');
		for (j=0; j<tabsPanel.length; j++) {
			tabsPanel[j].classList.remove('ah_is-active'); /* 2 */
			if (newerHref) {
				newerHref.classList.add('ah_is-active');
			}
		}

		document.querySelector(thisHref).classList.add('ah_is-active'); /* 2 */
	}


})();
