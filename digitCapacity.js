/*
    @version 0.0.0
    @requires jQuery.js
    @2014 Anton Permiakov
*/
(function($) {
    $.fn.digitCapacity = function(devider) {
        var spWidth = 0;
        var selCell = this;
        if (selCell.children('span').length <= 0) {
            selCell.each(function() {
                if ($(this).text().match(/[0-9]/)) {
                    var numList = $(this).text().split(devider);
                    $(this).html('<span style="text-align: right; display: inline-block">' + numList[0] + '</span><span style="text-align:left">' + devider + numList[1] + '</span>');
                    if (spWidth < $(this).children('span:nth-child(1)').width()) {
                        spWidth = $(this).children('span:nth-child(1)').width();
                    }
                }
            });
            $(selCell).children("span:nth-child(1)").width(spWidth);
        };
    };
})(jQuery);
