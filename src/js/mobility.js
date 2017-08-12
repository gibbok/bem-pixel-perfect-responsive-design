; (function (window) {
    jQuery.fn.visible = function () {
        return this.css('visibility', 'visible');
    };

    jQuery.fn.invisible = function () {
        return this.css('visibility', 'hidden');
    };

    var component = {
        init: function (componentId) {
            this.id = componentId;
            this.isVisible = true;
            this.domNode = $(this.id);
        },
        show: function () {
            if (!this.isVisible) {
                $(this.domNode).show();
            }
        },
        hide: function () {
            if (!this.isVisible) {
                $(this.domNode).hide();
            }
        },
        onClick: function (cb) {
            $(this.domNode).click(cb)
        }
    };



    $(function () {
        /**
         * remember to add W icon logo inside active operator in operators list
         */

        var addOperatorButton = Object.create(component);
        addOperatorButton.init('#operators__add__icon');
        addOperatorButton.onClick(function (event) {
            operatorsList.show();
        });

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

        var activeOperator = Object.create(component);
        activeOperator.init('#operators__list__operator2');
        activeOperator.onClick(function (event) {
            operatorsList.hide();
            ticketDialog.show();
        });


        var ticketDialog = Object.create(component);
        ticketDialog.init('#ticket');
        ticketDialog.isVisible = false;

        var sendTicketButton = Object.create(component);
        sendTicketButton.init('#ticket__window__button');
        sendTicketButton.onClick(function (event) {
            ticketDialog.hide();
            notificationDialog.show();
        });

        var notificationDialog = Object.create(component);
        notificationDialog.init('#notification');
        notificationDialog.isVisible = false;

    });

})(window);