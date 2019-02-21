var shop_car = (function (){
    var $box = document.querySelector('.order_content');
        
    var search = location.search
    var arr = decodeURIComponent(search).slice(1).split("&")
    var title = arr[0].split('=')[1]
    var price = arr[1].split('=')[1]
    var num = arr[2].split('=')[1]
    console.log(typeof(num))
    var imgUrl = arr[3].split('=')[1]
   
  
  
    return {
        init() {
            this.insertData()
            this.event();
        },
        event() {
            var _this = this;
        },
        insertData() {
            var price2 =price.substring(1);
            
            var arrr= [];
                    var $div = `
                    
                <ul class="order_lists">
                <li class="list_chk">
                    <input type="checkbox" id="checkbox_2" class="son_check">
                    <label for="checkbox_2"></label>
                </li>
                <li class="list_con">
                    <div class="list_img"><a href="javascript:;"><img src="${imgUrl}" alt=""></a></div>
                    <div class="list_text"><a href="javascript:;">${title}</a></div>
                </li>
               
                <li class="list_price">
                    <p class="price">${price}</p>
                </li>
                <li class="list_amount">
                    <div class="amount_box">
                        <a href="javascript:;" class="reduce reSty">-</a>
                        <input type="text" value="${num}" class="sum">
                        <a href="javascript:;" class="plus">+</a>
                    </div>
                </li>
                <li class="list_sum">
                    <p class="sum_price">￥${price2*num}</p>
                </li>
                <li class="list_op">
                    <p class="del"><a href="javascript:;" class="delBtn">删除</a></p>
                </li>
            </ul>
                    `
                    arrr.push($div)
                    $box.innerHTML=arrr.join('')
                  
                },
               
             

    
       
       /* getJson() {
            var _this = this;
            sendAjax('arr', {
                success(data) {
                    _this.insertData(JSON.parse(data)); //把一个字符串解析成对象
                }
            }) 
         },
         insertData({code, data}) {
            this.data = data;
                data.forEach((item) => {
                    var $div = `
                    
                <ul class="order_lists" id="${item.title}">
                <li class="list_chk">
                    <input type="checkbox" id="checkbox_2" class="son_check">
                    <label for="checkbox_2"></label>
                </li>
                <li class="list_con">
                    <div class="list_img"><a href="javascript:;"><img src="${item.imgUrl}" alt=""></a></div>
                    <div class="list_text"><a href="javascript:;">${item.price}</a></div>
                </li>
               
                <li class="list_price">
                    <p class="price">${item.num}</p>
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
                    arr.push($div);
                })
               
                $box.innerHTML = arr.join('');

        },
        setData(data) {
          
            var shopList = localStorage.getItem('shopList') || '[]';
            shopList = JSON.parse(shopList);
          
            for(var i = 0; i < shopList.length; i++) {
                var item = shopList[i];
                if(item.id == data.id) {
                    // flag = false
                    // 商品已经存在
                    item.count += data.count;
                    break;
                } 
            }
            // if(flag) {

            // }
            if(i == shopList.length) {
                // 商品不存在
                shopList.push(data);
            }
          
        }*/
    }
}())
//var arr = decodeURIComponent(location.search).slice(1).split("&")
//window.location.href=`../html/close.html?title=${title}&price=&${price}&num=${num}&imgUrl=${imgUrl}`

        

   