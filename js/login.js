var login = (function(){
    return{
        init(){
            this.event();
        },
        event(){
            $('.user_login').click( function() {
                $('.login-wrap').show()
            })
            $(".img01").mouseenter(function(){
                $(".img01").animate({left:'30px'})
            })
            $(".img01").mouseleave(function(){
                $(".img01").animate({left:'200px'})
            })
            
            var $login = document.querySelector('.login-wrap')
                    var $over =document.querySelector('.over')
                    var $form = document.querySelector('.dl')
                    var $user = $form['username'];
                    var $pAll = $form.querySelectorAll('p');
                    var $password = $form['password'];
                    var $btn = document.querySelector('.btn')
                    var $span01 = document.querySelector('.span01')
                    var $span02 = document.querySelector('.span02')
                    var $img01 = document.querySelector('.img01')
                    var $sys = document.querySelector('.sys')
                    var $sz = document.querySelector('.sz')
                   
               
                     $over.onclick=function(){
                        $login.style.display ="none"
                     }
                    $span02.onclick = function () {
                        $form.style.display ="none"
                        $img01.style.display="block"
                        $sys.style.display="block"
                        $sz.style.display="block"
                    }
                    $span01.onclick = function(){
                        $form.style.display ="block"
                        $img01.style.display="none"
                        $sys.style.display="none"
                        $sz.style.display="none"
                    }
               
                    $('#username').blur(function(){
                if($('#username').val() && $('#username').val().length>0){
                    if($('#username').val().length < 4){
                        $('.login_tip').text(' * 华为帐号限制在4~50 个字符').show()
                    }else{
                        $('.login_tip').text('').hide()
                    }
                }
            })
            $('.btn').click(function(e){
                e.preventDefault()
                if($('#username').val().length < 4 && $('#username').val() && $('#username').val().length>0){
                    $('.login_tip').text(' * 华为帐号限制在4~50 个字符').show()
                        return
                }else if(!$('#username').val()){
                    $('.login_tip').text('请输入您的帐号').show()
                    return
                }else if(!$('#password').val()){
                    $('.login_tip').text('请输入您的密码').show()
                    return
                }else{
                    $('.login_tip').text('').hide()
                }
            })
        }
    }
}());
login.init();