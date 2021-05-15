import { state } from './data.js';

const routes = (path) => {
    if (path === "" ) {
        return `<div class="showcase-container container flex flex-reverse">
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
                </div>`;
    } else if (state[path]) {
        return ` <div class="shop-container flex">
                <div id="shop-left">
                </div>
                <div class="shop-view flex">
                    <div class="box-7">
                        <div id="shop-image">
                            <img src=${state[path].photo_address} alt="">
                        </div>
                        <p>${state[path].description}</p>
                    </div>
                </div>
            </div>`;
    }
     else {
        return  `<div class="flex"><h1>404, The "${path}" page is not available</h1></div>`;
    }
}

export const render = path => {
    document.querySelector(".showcase")
        .innerHTML = routes(path.replace(/^#\//, ""));
};
