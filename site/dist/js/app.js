import products from "./products.js";
import ui from "./ui.js";
import cart from "./cart.js";

function init(){
    ui.buildProductsList(products.products);

    let sBar = document.querySelector('#product-search');
    sBar.addEventListener('keyup', (e) => {
        let sRes = products.search(sBar.value);
        ui.buildProductsList(sRes);
    });

    let videPanier = document.querySelector('#empty-cart');
    videPanier.addEventListener('click', (e) => {
        cart.emptyCart();
        ui.displayCart();
    })

}

export default {
    init
}
