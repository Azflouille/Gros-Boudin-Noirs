
let products = []

class product {
    ref;
    poids;
    description;
    idphoto;
    constructor(ref, p, desc, idphoto){
        this.ref = ref
        this.poids = p;
        this.description = desc;
        this.idphoto = idphoto;
    }
}

let search = kw => {
    kw = kw.toLowerCase();
    return products.filter(product=>product.ref.toLowerCase().includes(kw)||product.description.toLowerCase().includes(kw));
}

products.push(new product("Crème",0.3,"Une crème hydratante et parfumée qui rend la peau ...",1))
products.push(new product("Savon",0.2,"Un savon qui respecte la peau",2))
products.push(new product("Shampoing",0.4,"Shampoing doux et démêlant",3));
products.push(new product("Bracelet",0.15,"Un bracelet en tissu aux couleurs plaisantes",4))
products.push(new product("Tableau",0.6,"Aquarelle ou peinture à l'huile",5))
products.push(new product("Essuie-main",0.45,"Utile au quotidien",6))
products.push(new product("Gel",0.25,"Gel hydroalcoolique et Antibactérien",7))
products.push(new product("Masque",0.35,"masque chirurgical jetable categorie 1",8))
products.push(new product("Gilet",0.55,"Gilet décoré par nos couturières",9))
products.push(new product("Marque page",0.1,"Joli marque page pour accompagner vos lectures fav...",10))
products.push(new product("Sac",0.26,"Sac éco-responsable avec décorations variées",11))
products.push(new product("Surprise",0.7,"Pochette surprise pour faire plaisir aux petits et...",12))
products.push(new product("T-shirt",0.32,"T-shirt peint à la main et avec pochoir",13))

export default {
    products,
    search
}
