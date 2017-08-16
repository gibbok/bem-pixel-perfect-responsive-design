/*
 *  jQuery extension
 *  Add a super simple plugin in order to set the visibility of DOM node.
 */
jQuery.fn.visible = function () {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function () {
    return this.css('visibility', 'hidden');
};