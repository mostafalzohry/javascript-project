function shopCart(){
    var btnCart = document.querySelectorAll(".product button.cart");
    var count = 0;
    for(var i = 0 ; i < btnCart.length ; i++){
        btnCart[i].onclick = function(e){
            document.querySelector(".nav3 ul li span").textContent = count += 1;
            var boxSelect = document.querySelector(".box");
            var parent = e.target.parentNode;
            var clone = parent.cloneNode(true);
            boxSelect.appendChild(clone);
            clone.lastElementChild.innerText = "Buy-now";
            if(clone){
                document.querySelector(".nav3 ul li:nth-child(4)").onclick = function(){
                    boxSelect.classList.toggle("display");
                }
            }
        }
    }
}
function filtrationCart(){
    var btnPrice = document.querySelector(".btn"),
        btnDown = document.querySelector(".btn2"),
        btnAll = document.querySelector(".btn3"),
        dataProduct = document.querySelectorAll(".product");
    
    btnPrice.addEventListener('click' , () =>{
        dataProduct.forEach(show =>{
            show.style.display = "none";
            if(show.getAttribute('data-price') > 50){
                show.style.display = "block";
            }
        })
    })

    btnDown.addEventListener('click' , () =>{
        dataProduct.forEach(show =>{
            show.style.display = "none";
            if(show.getAttribute('data-price') < 50){
                show.style.display = "block";
            }
        })
    })
    btnAll.addEventListener('click' , () =>{
        dataProduct.forEach(show =>{
            show.style.display = "none";
            if(show.getAttribute('data-price') > 0){
                show.style.display = "block";
            }
        })
    })
}
//home page
fetch("js/pro.json").then(function(e){
    return e.json();
})
.then(function(data){
    for(var i = 0 ; i < data.length ; i++){
        document.querySelector(".main-product").innerHTML += "<div class = 'product'>" +
                                                        "<p>" + data[i].Type + "</p>"+
                                                        "<img src ='"+ data[i].imgMain +"'/>"+
                                                        "<a href = '" +  data[i].pageUrl +"'>"+ "See More" +"</a>"+
                                                        "</div>";
    }
})
// fashion page
fetch("../js/pro.json").then(function(e){
    return e.json();
})
.then(function(data){
    for(var x = 0 ; x < data[0].products.length ; x++){
        console.log( data[0].products.length);
        document.querySelector(".fashion-product").innerHTML +=  "<div class = 'product' data-price ='"+ data[0].products[x].price +"'>"+
                                                                    
                                                                    "<p>" + data[0].products[x].name + "</p> <br><br>"+
                                                                    "<img src ='"+ data[0].products[x].imgUrl +"'/>"+
                                                                    "<br><br>"+

                                                                    
                                                                    "<span> Price : " + data[0].products[x].price + " $</span> <br> <br>" +
                                                                    "<p><button> Details </button></p>"+
                                                                    "<button class='cart'>add to cart</button>"+
                                                                "</div>";
    }
    shopCart();
    filtrationCart()
})

// electronic page
fetch("../js/pro.json").then(function(e){
    return e.json();
})
.then(function(data){
    for(var x = 0 ; x < data[1].products.length ; x++){
        console.log( data[1].products.length);
        document.querySelector(".electron-product").innerHTML += "<div class = 'product' data-price ='"+ data[1].products[x].price +"'>"+
                                                                    "<p>" + data[1].products[x].name + "</p> <br><br>"+
                                                                    "<img src ='"+ data[1].products[x].imgUrl +"'/><br><br>"+
                                                                    "<br><br>"+
                                                                    "<span> Price : " + data[1].products[x].price + " $</span> <br><br>" +
                                                                    "<p><button> Details </button></p>"+
                                                                    "<button class='cart'>add to cart</button>"+
                                                                "</div>";
        
    }
    shopCart();
    filtrationCart()
})

// kids page
fetch("../js/pro.json").then(function(e){
    return e.json();
})
.then(function(data){
    for(var x = 0 ; x < data[2].products.length ; x++){
        console.log( data[2].products.length);
        document.querySelector(".kids-product").innerHTML +="<div class = 'product' data-price ='"+ data[2].products[x].price +"'>"+
                                                                    
                                                                    "<p>" + data[2].products[x].name + "</p> <br><br>"+
                                                                    "<img src ='"+ data[2].products[x].imgUrl +"'/>"+
                                                                    "<br><br>"+

                                                                    
                                                                    "<span> Price : " + data[2].products[x].price + " $</span> <br> <br>" +
                                                                    "<p><button> Details </button></p>"+
                                                                    "<button class='cart'>add to cart</button>"+
                                                                    
                                                                "</div>";
    }
    shopCart();
    filtrationCart()
})

// fitness page
fetch("../js/pro.json").then(function(e){
    return e.json();
})
.then(function(data){
    for(var x = 0 ; x < data[3].products.length ; x++){
        console.log( data[3].products.length);
        document.querySelector(".fitness-product").innerHTML += "<div class = 'product' data-price ='"+ data[3].products[x].price +"'>"+
                                                                    
                                                                    "<p>" + data[3].products[x].name + "</p> <br><br>"+
                                                                    "<img src ='"+ data[3].products[x].imgUrl +"'/>"+
                                                                    "<br><br>"+


                                                                    "<span> Price : " + data[3].products[x].price + " $</span> <br> <br>" +
                                                                    "<p><button>" + "<a href = '" +  data[3].products[x].urlpage +"'>"+ "Details" +"</a>" + "</button></p>"+
                                                                    "<button class='cart'>add to cart</button>"+
                                                                "</div>";
    }
    shopCart();
    filtrationCart();
})


// product fitness
fetch("../js/pro.json").then(function(e){
    return e.json();
})
.then(function(data){
        document.querySelector(".product-fitness").innerHTML += "<div class = 'products'>" +
                                                                    "<div class ='image'>"+"<img src ='"+ data[3].products[1].imgUrl +"'/>"+ "</div>"+
                                                                    "<div class = 'dataPro'>"+
                                                                    "<div class = 'title'>" + data[3].products[1].supname + "</div>"+
                                                                    "<div class ='rating'> Rating : "+"<img src ='"+ data[3].products[1].imgRating +"'/>"+ "<span>"+ data[3].products[1].Rating + "</span>" +"</div>"+
                                                                    "<div class = 'price'> Price : $ " + data[3].products[1].price + " </div>" +
                                                                    "<div class = 'details'>"+ "<h3>" + "About this item" +"</h3>" + data[3].products[1].details + "</div>"+
                                                                    "</div>"+
                                                                "</div>";
})