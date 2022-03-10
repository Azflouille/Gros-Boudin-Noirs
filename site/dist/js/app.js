import products from "./product.js";
import ui from "./ui.js";
import cart from "./cart.js";

function init(){
    ui.buildProductsList(products.products);

    let videPanier = document.querySelector('#empty-cart');
    videPanier.addEventListener('click', (e) => {
        cart.emptyCart();
        ui.displayCart();
    });

    let sBar = document.querySelector('#product-search');
    sBar.addEventListener('keyup', (e) => {
        let sRes = products.search(sBar.value);
        ui.buildProductsList(sRes);
    });

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }

    document.querySelector("#btnopen").addEventListener( "click", e => {
        openNav();
    });
    document.querySelector("#btnclose").addEventListener( "click", e => {
        closeNav();
    });


}

export default {
    init
}
