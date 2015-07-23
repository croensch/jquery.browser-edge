/**
 * @author croensch
 * @license Simplified BSD License
 * @version 1.0.0 
 */
(function () {
	var m;
    if (jQuery && jQuery.browser && (m = (navigator.userAgent).match(/Edge\/(1[2-9]|[2-9]\d|\d{3,})\./))) {
    	delete(jQuery.browser.mozilla);
    	delete(jQuery.browser.msie);
        jQuery.browser.edge = true;
        jQuery.browser.version = m[1];
    }
}());
