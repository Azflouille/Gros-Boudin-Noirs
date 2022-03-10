
let cart = [];

let addToCart = (product, qty) => {

    let c1 = document.querySelector("#case1");
    let c2 = document.querySelector("#case2");
    let c3 = document.querySelector("#case3");
    let pds = cart.reduce((p,c)=> p+c[0].poids*c[1], 0);
    let add= false;
    pds += product.poids;
    if(c1.checked){
        if(pds<=1){
            add = true;
        } else {
            alert("Rajouter ce produit fera dépasser la limite de la boite !")
        }
    } else if(c2.checked){
        if(pds<=3){
            add = true;
        } else {
            alert("Rajouter ce produit fera dépasser la limite de la boite !")
        }
    } else if(c3.checked){
        if(pds<=5){
            add = true;
        } else {
            alert("Rajouter ce produit fera dépasser la limite de la boite !")
        }
    }

    if(add){
        for (let elm of cart) {
            if (elm[0]==product) return elm[1]+= qty;
        }
        cart.push([product,qty]);
    }


}

let genericCalc = (callback) => {
    callback(cart.reduce((p,c)=> p+c[0].poids*c[1], 0), cart.reduce((p,c)=> p+c[1], 0));
}

let emptyCart = () => {
    cart = [];
}

let getCart = () => {
    return cart;
}

export default {
    addToCart,
    genericCalc,
    emptyCart,
    getCart
}
