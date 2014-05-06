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
                var numList = $(this).text().split(devider);
                if (numList[0] != undefined){
                    $(this).html('<span style="text-align: right; display: inline-block">' + numList[0] + '</span>');
                }
                if (numList[1] != undefined){
                    $(this).html('<span style="text-align: right; display: inline-block">' + numList[0] + '</span><span style="text-align:left">' + devider + numList[1] + '</span>');
                }
                if (spWidth < $(this).children('span:nth-child(1)').width()) {
                    spWidth = $(this).children('span:nth-child(1)').width();
                }
            });
            $(selCell).children("span:nth-child(1)").width(spWidth);
        };
    };
})(jQuery);
