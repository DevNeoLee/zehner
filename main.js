

export const pages = {
    shop_all: {
        photo_address: "./images/baby-comfy.png",
        description: "High Tech Producgts. Designed with Multi-tasking Parents in Mind. Believe in Better."
    },
    seats: {
        photo_address: "./images/baby-comfy.png",
        description: "Comfortable Seats for Infants That Offer a Variety of Features like motions and articulation."
    },
    playcards: {
        photo_address: "./images/baby-comfy.png",
        description: "playcards"
    },
    feeding: {
        photo_address: "./images/baby-comfy.png",
        description: "feeding"
    },
    bassinets: {
        photo_address: "./images/baby-comfy.png",
        description: "bassinets"
    },
    bath: {
        photo_address: "./images/baby-comfy.png",
        description: "bath"
    },
    mobile: {
        photo_address: "./images/baby-comfy.png",
        description: "mobile"
    },
    accessories: {
        photo_address: "./images/baby-comfy.png",
        description: "accessories"
    },
    spare_parts: {
        photo_address: "./images/baby-comfy.png",
        description: "spare_parts"
    },
}

 const nav = `<a href="/#/">Home</a> | 
                           <a href="/#/shop_all">Shop_All</a> | 
                           <a href="/#/contact">Contact</a>`;
const routes = {
    "": `<div class="showcase-container container flex flex-reverse">
                <div class="showcase-text flex">
                    <div class="box-2">
                        <h1>Freeing up your hands.
                            So you can do more.</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                        <button class="button">Shop Bassinets</button>
                    </div>
                </div>
                <div class="chair">
                    <img src="images/chair.png" alt="chair-image">
                </div>
            </div>`,
    "shop_all": `<div class="shop-container flex">
                    <div id="shop-left">
                    </div>
                <div class="shop-view flex">
                    <div class="box-7">
                        <div id="shop-image">
                            <img src="/images/shop_all.png" alt="">
                        </div>
                        <p>High Tech Products. Designed with Multi-tasking Parents in Mind. Believe in Better.</p>
                    </div>
                </div>
            </div>`,
    "seats": ` <div class="shop-container flex">
                <div id="shop-left">
                </div>
                <div class="shop-view flex">
                    <div class="box-7">
                        <div id="shop-image">
                            <img src="/images/seats.png" alt="">
                        </div>
                        <p>Comfortable Seats for Infants That Offer a Variety of Features like motions and articulation.</p>
                    </div>
                </div>
            </div>`,
};

const render = path => {
    // document.querySelector('.showcase-container').classList.add('hide_display')
    document.querySelector(".showcase")
        .innerHTML = routes[path.replace(/^#\//, "")] || `<h1>404</h1>${nav}`;
};

window.onhashchange = evt => render(window.location.hash);
render(window.location.hash);