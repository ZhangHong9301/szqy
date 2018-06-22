/**
 * 
 */
(function ($) {
    "use strict";
    var BoncAceDropdown = function (element, options) {
        this.init(element, options);
    },
    old = null;
    BoncAceDropdown.prototype = {
        init: function (element, options) {
            this.$element = $(element);
            this.setOptions(options);
            this.initialized = true;
        },
        setOptions: function (options) {
            this.options = $.extend({}, (this.options || $.fn.boncAceDropdown.defaults), options);
            this.data=this.options;
            this.render();
        },
        render: function () {
        	var info=$("<i></i>").addClass("ace-icon fa fa-angle-down icon-on-right");
        	this.$element.append(this.buildDefault(info));
           for(var i in this.data){
            	var menu=this.buildMenu(this.data[i]);
            	menu.bind('click',function(e){
            		e.preventDefault();
            		var bro=$(this).parent().prev();
            		bro.text($(this).children('a').text());
            		bro.append(info);
            		bro.val($(this).children('input').val());
            	})
            	this.$element.append(menu);
           }
        },
        buildMenu: function (item) {
        	return $("<li></li>").append(
        				$("<a></a>").append(item.text).attr("href","#")
        		   ).append(
        				$("<input></input>").attr("type","hidden").attr("value",item.value)
        		   );
        },
        buildDefault:function(info){
			var showAll = $("<li></li>").append($("<a></a>").append("全部").attr("href", "#"))
			.append($("<input></input>").attr("type", "hidden").attr("value", ''));
			showAll.bind('click', function(e) {
				e.preventDefault();
				var bro = $(this).parent().prev();
				bro.text($(this).children('a').text());
				bro.append(info);
				bro.val($(this).children('input').val());
			});
			return showAll;
        }
    };


    /* TYPEAHEAD PLUGIN DEFINITION
     * =========================== */

    old = $.fn.boncAceDropdown;

    $.fn.boncAceDropdown = function (option) {
        var args = arguments,
            result = null;
        $(this).each(function (index, item) {
            var $this = $(item),
                data = $this.data('boncAceDropdown'),
                options = (typeof option !== 'object') ? null : option;

            if (!data) {
                data = new BoncAceDropdown(this, options);
                $this = $(data.$element);
                $this.data('boncAceDropdown', data);
                return;
            }
            if (typeof option === 'string') {
                if (data[option]) {
                    result = data[option].apply(data, Array.prototype.slice.call(args, 1));
                } else {
                    throw "Method " + option + " does not exist";
                }
            } else {
                result = data.setOptions(option);
            }
        });
        return result;
    };
    $.fn.boncAceDropdown.Constructor = BoncAceDropdown;
}(window.jQuery));
