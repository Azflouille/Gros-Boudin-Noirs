
let products = []

class product {
    ref;
    price
    description;
    constructor(ref, price, desc){
        this.ref = ref
        this.price = price
        this.description = desc;
    }
}

let search = kw => {
    kw = kw.toLowerCase();
    return products.filter(product=>product.ref.toLowerCase().includes(kw)||product.description.toLowerCase().includes(kw));
}

products.push(new product("Choc' extra cher",125.2,"Chocolat très cher"))
products.push(new product("Choc' de qualité",10.6,"Chocolat cher"))
products.push(new product("CroustiChoc'",2.4,"Chocolat pas cher"));
products.push(new product("Cailloc'",0.2,"Simple caillou"))

export default {
    products,
    search
}
