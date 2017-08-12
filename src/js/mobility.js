/*
 *  Mobility screen.
 */
; (function (window) {

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

    /*
     *  Base component.
     *  Based on OLOO (objects linked to other objects) pattern.
     */
    var component = {
        /*
         *  Initialize the componenet.
         */
        init: function (id) {

            this.id = id;
            this.isVisible = true;
            this.domNode = $(this.id);
        },
        /*
         *  Show the componenet.
         */
        show: function () {
            if (!this.isVisible) {
                $(this.domNode).show();
            }
        },
        /*
         *  Hide the componenet.
         */
        hide: function () {
            if (!this.isVisible) {
                $(this.domNode).hide();
            }
        },
        /*
         *  Detect mouse click events on the componenet.
         */
        onClick: function (cb) {
            $(this.domNode).click(cb)
        }
    };



    /*
     *  Base for a draggable component.
     */
    var draggable = {
        init: function (id) {
            this.id = id;
            this.domNode = $(this.id);
        },
        draggable: function () {
            $(this.domNode).addClass('dragscroll');
        }
    };



    $(function () {
        // create draggable timeline of events
        var timeline = Object.create(draggable);
        timeline.init('#event__body');
        timeline.draggable();

        // create add operator button
        var addOperatorButton = Object.create(component);
        addOperatorButton.init('#operators__add__icon');
        addOperatorButton.onClick(function (event) {
            operatorsList.show();
        });

        // create list of operators
        var operatorsList = Object.create(component);
        operatorsList.init('#operators__list');
        operatorsList.isVisible = false;
        operatorsList.show = function () {
            if (!this.isVisible) {
                $(this.domNode).visible();
            }
        };
        operatorsList.hide = function () {
            if (!this.isVisible) {
                $(this.domNode).invisible();
            }
        };

        // create active operator
        var activeOperator = Object.create(component);
        activeOperator.init('#operators__list__operator2');
        activeOperator.onClick(function (event) {
            operatorsList.hide();
            ticketDialog.show();
        });

        // create ticket dialog
        var ticketDialog = Object.create(component);
        ticketDialog.init('#ticket');
        ticketDialog.isVisible = false;

        // create send ticket button in ticket dialog
        var sendTicketButton = Object.create(component);
        sendTicketButton.init('#ticket__window__button');
        sendTicketButton.onClick(function (event) {
            ticketDialog.hide();
            notificationDialog.show();
        });

        // create a notification dialog
        var notificationDialog = Object.create(component);
        notificationDialog.init('#notification');
        notificationDialog.isVisible = false;

    });

})(window);