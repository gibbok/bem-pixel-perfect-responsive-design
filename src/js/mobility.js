/*
 *  Mobility screen.
 */
; (function (window) {
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
            this.isVisible = false;
            this.domNode = $(this.id);
        },
        /*
         *  Show the componenet.
         */
        show: function () {
            if (!this.isVisible) {
                $(this.domNode).show();
                this.isVisible = true;
            }
        },
        /*
         *  Hide the componenet.
         */
        hide: function () {
            if (this.isVisible) {
                $(this.domNode).hide();
                this.isVisible = false;
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
     *  Visibility mixin.
     *  Properties shadowing to the base implemention of show/hide.
     */
    var visibilityMixin = {
        show: function () {
            if (!this.isVisible) {
                $(this.domNode).visible();
                this.isVisible = true;
            }
        },
        hide: function () {
            if (this.isVisible) {
                $(this.domNode).invisible();
                this.isVisible = false;
            }
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
        addOperatorButton.isVisible = true;
        addOperatorButton.onClick(function (event) {
            operatorsList.show();
        });

        // create list of operators
        var operatorsList = Object.create(component);
        operatorsList.init('#operators__list');
        operatorsList = Object.assign(operatorsList, visibilityMixin)

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
    });
})(window);