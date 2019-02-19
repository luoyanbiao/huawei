var mate = (function () {
    var $skip = document.querySelector('#skip')
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $(".loadup").click(function () {
                $(".mate-show").show();
                $('.loadup').css('display', 'none')
                $('.loaddown').css('display', 'block')
            });
            $(".loaddown").click(function () {
                $(".mate-show").hide();
                $('.loaddown').css('display', 'none')
                $('.loadup').css('display', 'block')
            });
            $(".paraup").click(function () {
                $(".show-para").show();
                $(".paraup").css('display', 'none')
            });
            $(".paradown").click(function () {
                $(".show-para").hide();
                $(".paraup").css('display', 'block')
            });


            $('.mate-message').on('click', '.ca141d', function () {
                $(this).css('border-color', '#ca141d')
                $(this).siblings().css('border-color', '#a4a4a4')
            })

            $('#silver').click(function () {
                $('.nota').css('cursor', 'pointer')
                $('.nota').css('border-color', '#a4a4a4')
                $('.nota').css('color', '#3a3a3a')
                
            })
            $('#skip').click(function () {
                $('.nota').css('cursor', 'not-allowed')
                $('.nota').css('border-color', '#dddddd')
                $('.nota').css('color', '#dddddd')
                
            })



        }
    }
}())
mate.init();