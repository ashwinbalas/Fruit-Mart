let productPage = document.querySelector("#productsPage");

let products = [
    {
        url:"./assets/image/shop/apple.png",
        title:"Appel",
        prise:80
    },
    {
        url:"./assets/image/shop/banana.png",
        title:"Banana",
        prise:80
    },
    {
        url:"./assets/image/shop/avocado.png",
        title:"Avocado",
        prise:100
    },
    {
        url:"./assets/image/shop/barry.png",
        title:"Barry",
        prise:70
    },
    {
        url:"./assets/image/shop/grape.png",
        title:"Grape",
        prise:40
    },
    {
        url:"./assets/image/shop/kiwi.png",
        title:"Kiwi",
        prise:120
    },
    {
        url:"./assets/image/shop/mango.png",
        title:"Mango",
        prise:50
    },
    {
        url:"./assets/image/shop/orange.png",
        title:"Orange",
        prise:60
    },
    {
        url:"./assets/image/shop/papaya.png",
        title:"Papaya",
        prise:70
    },
    {
        url:"./assets/image/shop/peach.png",
        title:"Peach",
        prise:90
    },
    {
        url:"./assets/image/shop/pomogrante.png",
        title:"Pomogrante",
        prise:70
    },
    {
        url:"./assets/image/shop/storyberries.png",
        title:"Storyberries",
        prise:140
    },
    {
        url:"./assets/image/shop/watermalone.png",
        title:"Watermalone",
        prise:100
    },
    {
        url:"./assets/image/shop/pineapple.png",
        title:"Pineapple",
        prise:130
    },

];

products.forEach(element => {

    let productCard = document.createElement("div");
    productCard.classList.add("product-card");

    let productImg = document.createElement("div");
    productImg.classList.add("product-img");

    let productDetails= document.createElement("div");
    productDetails.classList.add("product-details");

    let productButtons = document.createElement("div");
    productButtons.classList.add("button-group");
    productButtons.innerHTML =
    `<button>
        Buy Now
    </button>
    <button>
        Add To Cart
    </button>`;

    let img = document.createElement("img");
    img.src = element.url;
    let h5 = document.createElement("h5");
    h5.innerHTML = element.title;

    let p = document.createElement("p");
    p.innerHTML = element.prise+"/Kg";

    productPage.appendChild(productCard);
    productCard.appendChild(productImg);
    productCard.appendChild(productDetails);
    productCard.appendChild(productButtons);

    productImg.appendChild(img);
    productDetails.appendChild(h5);
    productDetails.appendChild(p);
    
});