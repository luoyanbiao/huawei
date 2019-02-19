var shop = (function () {
    var $box = document.querySelector('.main')
    return {
        init() {
            this.getJson();
            this.event();
           
        },
        event() {
            var _this = this;
            $box.onclick = function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == 'BUTTON'){
                    var index = target.parentNode.getAttribute('index')
                    var obj ={
                        count:1,
                        ..._this.data[index]
                    }
                    _this.setData(obj)
                }
                
            }
            $box.onchange =function(e){
                e = e || window.event;
                var target = e.target || e.srcElement;
                if(target.nodeName == 'INPUT'){
                 var index = target.parentNode.getAttribute('index')
                 _this.data[index].count = Number(target.value);
                }
               
            }
        },
        getJson() {
            var _this = this;
            sendAjax('../js/json.json', {
                success(data) {
                    _this.insertData(JSON.parse(data))
                }
            })
        },
        insertData({code,data}) {
            this.data = data;//不理解，不写也可以执行
            if(code == 200){
                var arr= [];
                data.forEach((item,index) => {//data循环
                    var $div = `

                    <ul class="order_lists" id="${item.id}" index = ${index}>
                    <li class="list_chk">
                        <input type="checkbox" id="checkbox_2" class="son_check">
                        <label for="checkbox_2"></label>
                    </li>
                    <li class="list_con">
                        <div class="list_img"><a href="javascript:;"><img src="../images/iphone2.png" alt=""></a></div>
                        <div class="list_text"><a href="javascript:;">${item.ps}</a></div>
                    </li>
                   
                    <li class="list_price">
                        <p class="price">${item.price}</p>
                    </li>
                    <li class="list_amount">
                        <div class="amount_box">
                            <a href="javascript:;" class="reduce reSty">-</a>
                            <input type="text" value="1" class="sum">
                            <a href="javascript:;" class="plus">+</a>
                        </div>
                    </li>
                    <li class="list_sum">
                        <p class="sum_price">${item.price}</p>
                    </li>
                    <li class="list_op">
                        <p class="del"><a href="javascript:;" class="delBtn">删除</a></p>
                    </li>
                </ul>

                    `
                    arr.push($div)
                    $box.innerHTML=arr.join('')
                });
            }else{
                alert=('你没有访问权限')
            }
            
           
        },
        setData(data){
            var shopList = localStorage.getItem('shopList')||'[]';
            shopList = JSON.parse(shopList);
            for(var i = 0;i<shopList.length;i++){
                var item = shopList[i]
                if(item.id == data.id){
                    item.count += data.count;
                    break;
                }
            }
            if(i == shopList.length){
                shopList.push(data);
        
            }  
            localStorage.shopList = JSON.stringify(shopList); 
         }
    }
}())
shop.init();