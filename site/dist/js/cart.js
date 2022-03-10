
let cart = [];

let addToCart = (product, qty) => {
    for (let elm of cart) {
        if (elm[0]==product) return elm[1]+= qty;
    }
    cart.push([product,qty]);
}

let genericCalc = (callback) => {
    callback(cart.reduce((p,c)=> p+c[0].price*c[1], 0), cart.reduce((p,c)=> p+c[1], 0));
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
