var iphone = (function(){
    return{
        init(){
            this.event()
        },
        event(){
            var _this = this;
            $('.select').on('click', function () {
                $('.red').css("border-color","red")
                $('.black').css("border-color","black")
   
            })
            $(".load").click(function(){
              $(".show-time").show();
            });
            var $repair =document.querySelector('.repair')
            var $drop =document.querySelector('.drop')
            var $drop1 =document.querySelector('.drop-a')
            var $broken =document.querySelector('.broken')
            var $dropa =document.querySelector('.drop-2')
            $repair.onmouseenter=function(){
                $drop.style.display="block"
                $drop1.style.display="block"
            }
            $repair.onmouseleave=function(){
                $drop.style.display="none"
                $drop1.style.display="none"
            }
            $broken.onmouseenter=function(){
                $dropa.style.display="block"
            }
            $broken.onmouseleave=function(){
                $dropa.style.display="none"
            }
        }
    }
}())
iphone.init();