var yyb = (function(){
    var $s1 = $('.s1');
    var $m1 = $('.m1');
    var $s2 = $('.s2');
    var $m2 = $('.m2');
    var $s3 = $('.s3');
    var $n3 = $('.n3');
    var $s4 = $('.s4');
    var $c4 = $('.c4');
    var $s5 = $('.s5');
    var $m5 = $('.m5');
	return{
        init(){
            this.event();
        },
        event(){
            $s1.mouseenter(function(){
                $(this).addClass('hover');
                $m1.show();
            })
            $s1.mouseleave(function(){
                $(this).removeClass('hover');
                $m1.hide();
            })
            $s2.mouseenter(function(){
                $(this).addClass('hover');
                $m2.show();
            })
            $s2.mouseleave(function(){
                $(this).removeClass('hover');
                $m2.hide();
            })
            $s3.mouseenter(function(){
                $(this).addClass('hover');
                $n3.show();
            })
            $s3.mouseleave(function(){
                $(this).removeClass('hover');
                $n3.hide();
            })
            $s4.mouseenter(function(){
                $(this).addClass('hover');
                $c4.show();
            })
            $s4.mouseleave(function(){
                $(this).removeClass('hover');
                $c4.hide();
            })
            $s5.mouseenter(function(){
                $(this).addClass('hover');
                $m5.show();
            })
            $s5.mouseleave(function(){
                $(this).removeClass('hover');
                $m5.hide();
            })
            $('#zxnav_0').stop().on('mouseenter', function(){
                // $('.nav-sub').css('display','block');
                $('#naverSub00').slideDown();
            })
            $('#zxnav_0').stop().on('mouseleave', function(){
                // $('.nav-sub').css('display','none');
                $('#naverSub00').slideUp();
            })
            $('#zxnav_1').stop().on('mouseenter', function(){
                // $('.nav-sub').stop().css('display','block');
                $('#naverSub01').slideDown();
            })
            $('#zxnav_1').stop().on('mouseleave', function(){
                // $('.nav-sub').css('display','none');
                $('#naverSub01').slideUp();
            })
            $('.text').on('focus', function(){
                $('.search-bar-key').hide();
            })
            $('.text').on('blur', function(){
                $('.search-bar-key').show();
            })
        }
    }
}());
yyb.init();