var yyb = (function () {
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

    return {
        init() {
            this.event();
        },
        event() {
            // 导航栏一
            $s1.mouseenter(function () {
                $(this).addClass('hover');
                $m1.show();
            })
            $s1.mouseleave(function () {
                $(this).removeClass('hover');
                $m1.hide();
            })
            $s2.mouseenter(function () {
                $(this).addClass('hover');
                $m2.show();
            })
            $s2.mouseleave(function () {
                $(this).removeClass('hover');
                $m2.hide();
            })
            $s3.mouseenter(function () {
                $(this).addClass('hover');
                $n3.show();
            })
            $s3.mouseleave(function () {
                $(this).removeClass('hover');
                $n3.hide();
            })
            $s4.mouseenter(function () {
                $(this).addClass('hover');
                $c4.show();
            })
            $s4.mouseleave(function () {
                $(this).removeClass('hover');
                $c4.hide();
            })
            $s5.mouseenter(function () {
                $(this).addClass('hover');
                $m5.show();
            })
            $s5.mouseleave(function () {
                $(this).removeClass('hover');
                $m5.hide();
            })
            // 导航栏二
            $('#zxnav_0').stop().on('mouseenter', function () {
                // $('.nav-sub').css('display','block');
                $('#naverSub00').slideDown();
            })
            $('#zxnav_0').stop().on('mouseleave', function () {
                // $('.nav-sub').css('display','none');
                $('#naverSub00').slideUp();
            })
            $('#zxnav_1').stop().on('mouseenter', function () {
                // $('.nav-sub').stop().css('display','block');
                $('#naverSub01').slideDown();
            })
            $('#zxnav_1').stop().on('mouseleave', function () {
                // $('.nav-sub').css('display','none');
                $('#naverSub01').slideUp();
            })
            //红色小边框动画
            $(".grid-items").on('mouseenter',function(){
               
                $(".red-wrap").animate({width:'374px'});
               
            })
            $(".grid-items").on('mouseleave',function(){
                $(".red-wrap").animate({width:'-374px'});
               
            })
           
            //主页input框
            $('.text').on('focus', function () {
                $('.search-bar-key').hide();
            })
            $('.text').on('blur', function () {
                $('.search-bar-key').show();
            })
            // 注册验证
            $('.text').on('click', function () {
                $(this).prev().focus();
            })
            $('.text').on('input', function () {
                $(this).next().hide();
            })
            $('.text').on('blur', function () {
                if ($(this).val() == '') {
                    $(this).next().show();
                }
            })
            // 手机号
            $('.input-number').on('blur', function () {
                var arr = /^1[34578]\d{9}$/;
                if ($(this).val() == '') {
                    $('.phone-e').hide();
                    $('.phone-e').removeAttr('id');
                    $(this).parent().parent().css('border', '1px solid #d9d9d9');
                } else {
                    //验证成功
                    if (arr.test($(this).val())) {
                        $('.phone-e').hide();
                        $('.phone-e').removeAttr('id');
                        $(this).parent().parent().css('border', '1px solid #d9d9d9');
                    } else {
                        //验证失败
                        $('.phone-e').show();
                        $('.phone-e').attr('id','red');
                        $(this).parent().parent().css('border', '1px solid red');
                    }
                }
            })
            // 验证码
            $('.verify').on('blur', function () {
                if ($(this).val() == '') {
                    $(this).next().show();
                }
            })
            // 密码
            $('.pwd-input').on('blur', function () {
                var arr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
                if ($(this).val() == '') {
                    $('.pwd-e').hide();
                    $('.pwd-e').removeAttr('id');
                    $(this).parent().parent().css('border', '1px solid #d9d9d9');
                } else {
                    //验证成功
                    if (arr.test($(this).val())) {
                        $('.pwd-e').hide();
                        $('.pwd-e').removeAttr('id');
                        $(this).parent().parent().css('border', '1px solid #d9d9d9');
                    } else {
                        //验证失败
                        $('.pwd-e').show();
                        $('.pwd-e').attr('id','red');
                        $(this).parent().parent().css('border', '1px solid red');
                    }
                }
            })
            // 确认密码
            $('.vam').on('blur', function () {
                if ($(this).val() == '') {
                    $('.vam-e').hide();
                    $('.vam-e').removeAttr('id');
                    $(this).parent().parent().css('border', '1px solid #d9d9d9');
                } else {
                    //验证成功
                    if ($(this).val() == $('.pwd-input').val()) {
                        $('.vam-e').hide();
                        $('.vam-e').removeAttr('id');
                        $(this).parent().parent().css('border', '1px solid #d9d9d9');
                    } else {
                        //验证失败
                        $('.vam-e').show();
                        $('.vam-e').attr('id','red');
                        $(this).parent().parent().css('border', '1px solid red');
                    }
                }
            })
            // 邮箱验证
            $('.e-mail').on('blur', function () {
                var arr = /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/
                if ($(this).val() == '') {
                    $('.mail-e').hide();
                    $('.mail-e').removeAttr('id');
                    $(this).parent().parent().css('border', '1px solid #d9d9d9');
                } else {
                    //验证成功
                    if (arr.test($(this).val())) {
                        $('.mail-e').hide();
                        $('.mail-e').removeAttr('id');
                        $(this).parent().parent().css('border', '1px solid #d9d9d9');
                    } else {
                        //验证失败
                        $('.mail-e').show();
                        $('.mail-e').attr('id','red');
                        $(this).parent().parent().css('border', '1px solid red');
                    }
                }
            })
            //提交
            $('#form').submit(function () {
                var $inputAll = document.querySelectorAll('input');
                var $pAll = document.querySelectorAll('.error');
                for (i = 0; i < $inputAll.length; i++) {
                    // var $red = $(this).parent().parent().next();
                    if ($inputAll[i].value == '') {
                        alert("内容不能为空");
                        $inputAll[i].focus();
                        return false;
                    }
                for(j = 0; j < $pAll.length; j++){
                    if($pAll[i].id == 'red'){
                        alert("验证错误");
                        return false;
                    }
                }
                    
                    // if($red.id == 'red'){
                    //     alert("验证错误");
                    //     $inputAll[i].focus();
                    //     return false;
                    // }
                }
                return true;
            })





        }
    }
}());
yyb.init();