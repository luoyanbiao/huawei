var baidu = (function () {
    var $search = document.querySelector('.text');
    var $menu = document.querySelector('.menu');
    var timer = null;
    return {
        init() {
            this.event();
        },
        event() {
            var _this = this;
            $search.onfocus = function () {
                this.oninput();
            }
            $search.oninput= function () {
                clearTimeout(timer);
                var val = this.value;
                if (val == '') {
                    _this.hidden();
                } else {
                    _this.show();
                    timer = setTimeout(() => {
                        _this.getJson(val)
                    }, 500);
                }

            }
            $search.onblur = function () {
                setTimeout(() => {
                    _this.hidden();
                }, 200);
            }
            $menu.onclick = function (e) {
                e = e || window.event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'LI') {
                    var text = target.innerHTML;
                    $search.value = text;
                }
            }
        },
        show() {
            $menu.style.display = 'block';
        },
       hidden() {
            $menu.style.display = 'none';
        },
        getJson(val) {
            var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su';
            sendJonp(url, {
                wd: val,
                cb: "baidu.insertData"
            })
        },
        insertData(data) {
            $menu.innerHTML = '';
            var $frag = document.createDocumentFragment()//添加文档碎片
            data.s.forEach(x => {
                var $li = document.createElement("li");
                $li.innerHTML = x;
                $frag.appendChild($li);

            })
            $menu.appendChild($frag)
        }
    }

}())