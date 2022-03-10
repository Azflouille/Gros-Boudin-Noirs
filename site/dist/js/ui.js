import cart from "./cart.js";

function displayProduct(prod){

    let str = `
    <div class="col mb-5">
         <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="assets/images/produits/${prod.idphoto}.jpg" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${prod.ref}</h5>
                    <!-- Product price-->
                    <p>${prod.poids} kg</p>
                    <p>${prod.description}</p>

                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto product-add2cart">Ajouter au panier</a></div>
            </div>
        </div>
    </div>
    `
    let parser = new DOMParser();

    let pDoc = parser.parseFromString(str, 'text/html');

    let add = pDoc.querySelector('.product-add2cart');
    add.addEventListener('click', ()=> {
        cart.addToCart(prod,1);
        displayCart();
    });

    return pDoc.firstChild;
}

let displayCart = () => {
    let listcart = document.querySelector("#cart-content");

    listcart.innerHTML = cart.getCart().map(helmet =>
        `
    <tr>
        <td data-type="ref">${helmet[0].ref}</td>
        <td data-type="qte">x${helmet[1]}</td>
        <td data-type="amount">${(helmet[1] * helmet[0].poids).toFixed(2)}kg</td>
    </tr>
    <br>
    `
    ).reduce((p, c) => p + c, '');


    let total = document.querySelector('#cart-total');
    let size = document.querySelector('#total-products');
    cart.genericCalc((res,qty) => {
        total.innerHTML = res.toFixed(2) + 'kg';
        size.innerHTML = qty;
    })
}



function buildProductsList(tabProds){
    let listItem = document.querySelector("#product-list");
    listItem.innerHTML='';
    tabProds.forEach(e => listItem.appendChild(displayProduct(e)));
}

export default {
    buildProductsList,
    displayCart
}
