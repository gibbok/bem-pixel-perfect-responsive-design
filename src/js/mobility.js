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

        var addOperator = Object.create(component);
        addOperator.init('#operators__add__icon');
        addOperator.onClick(function (event) {
            operatorsList.show();
        });

        var ticketDialog = Object.create(component);
        ticketDialog.init('#ticket');
        ticketDialog.isVisible = false;


        var activeOperator = Object.create(component);
        activeOperator.init('#operators__list__operator2');
        activeOperator.onClick(function (event) {
            ticketDialog.show();
        });

    });

})(window);