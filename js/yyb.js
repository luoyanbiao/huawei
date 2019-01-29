var yyb = (function(){
    var $s = $('.s-dropdown');
    var $more = $('.dropdown-more');
	return{
        init(){
            this.event();
        },
        event(){
            $s.mouseenter(function(){
                $s.addClass('hover');
                $more.show();
            })
            $s.mouseleave(function(){
                $s.removeClass('hover');
                $more.hide();
            })
        }
    }
}());
yyb.init();