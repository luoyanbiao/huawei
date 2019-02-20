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
    var $inputAll = document.querySelectorAll('input');
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
                    $(this).parent().parent().css('border', '1px solid #d9d9d9');
                } else {
                    if (arr.test($(this).val())) {
                        $('.phone-e').hide();
                        $(this).parent().parent().css('border', '1px solid #d9d9d9');
                    } else {
                        $('.phone-e').show();
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
                    $(this).parent().parent().css('border', '1px solid #d9d9d9');
                } else {
                    if (arr.test($(this).val())) {
                        $('.pwd-e').hide();
                        $(this).parent().parent().css('border', '1px solid #d9d9d9');
                    } else {
                        $('.pwd-e').show();
                        $(this).parent().parent().css('border', '1px solid red');
                    }
                }
            })
            // 确认密码
            $('.vam').on('blur', function () {
                if ($(this).val() == '') {
                    $('.vam-e').hide();
                    $(this).parent().parent().css('border', '1px solid #d9d9d9');
                } else {
                    if ($(this).val() == $('.pwd-input').val()) {
                        $('.vam-e').hide();
                        $(this).parent().parent().css('border', '1px solid #d9d9d9');

                    } else {
                        $('.vam-e').show();
                        $(this).parent().parent().css('border', '1px solid red');
                    }
                }
            })
            // 邮箱
            $('.e-mail').on('blur', function () {
                var arr = /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/
                if ($(this).val() == '') {
                    $('.mail-e').hide();
                    $(this).parent().parent().css('border', '1px solid #d9d9d9');
                } else {
                    if (arr.test($(this).val())) {
                        $('.mail-e').hide();
                        $(this).parent().parent().css('border', '1px solid #d9d9d9');
                    } else {
                        $('.mail-e').show();
                        $(this).parent().parent().css('border', '1px solid red');
                    }
                }
            })
            //提交






        }
    }
}());
yyb.init();