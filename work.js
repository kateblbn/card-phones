const show = document.querySelector(".show")

class Phones{
    constructor(img, title, memory, ram, screen, color) {
        this.img = img;
        this.title = title;
        this.memory = memory;
        this.ram = ram;
        this.screen = screen;
        this.color = color;
    }
    template(discount, price) {
        let calc =price - ( (price * discount ) / 100 ) ;
        let hidden = discount >= 1 ? "active" : "hidden";
        let mg15 = hidden == "hidden" ? "margin" : "use";
        console.log(mg15);
        console.log(hidden);
        console.log(calc);
        show.innerHTML += `
        <div class="container">
            <div class="phone__wrapper">
                <img src="${this.img}" alt="">
                <h2>${this.title}</h2>
                <p class="phone__details ${mg15}"> <span class="bold">Memory:</span> ${this.memory} gb</p>
                <p class="phone__details ${mg15}"> <span class="bold">Ram:</span> ${this.ram} gb</p>
                <p class="phone__details ${mg15}"> <span class="bold">Screen:</span> ${this.screen} inch</p>
                <p class="phone__details  ${mg15}"> <span class="bold">Color:</span> ${this.color}</p>
                    <div class="flex ${hidden}">
                        <p class="phone__details old-price"> ${price} $</p>
                        <p class="phone__details discount"> <span class="bold" >Discount: </span> ${discount} %</p>
                    </div>
                <button class="phone__btn new-price"> <span class="bold" >Price: </span> ${calc} $</button>
            </div>
        </div>
        `
    }
}
const samsung = new Phones("./img/samsung.jpg", "Samsung Galaxy S 21", 4, 64, 6.2, "silver");
const xiaomi = new Phones("./img/xiaomi.jpg", "Xiaomi Redmi Note 9 Pro", 6, 64, 6.67, "gray");
const iphone = new Phones("./img/iphone.jpg", "Apple iPhone 11", 4, 128, 6.1, "black")

samsung.template(5, 300);
xiaomi.template(10, 400);
iphone.template(0, 600);