/* =====================================
   LUMINACK PREMIUM SCRIPT
===================================== */

// MOBILE MENU



/* =====================================
   PRODUCTS
   ADD PRODUCTS HERE LATER
===================================== */

const products = [

/*
Example:

{
title: "iPhone 17 Pro",
description: "Latest flagship smartphone",
price: "₹99,999",
image: "images/iphone.jpg",
link: "https://your-affiliate-link.com"
}

*/

];

/* =====================================
   PRODUCT RENDERING
===================================== */

const productContainer =
document.getElementById("productContainer");

function renderProducts(items){

    if(!productContainer) return;

    productContainer.innerHTML = "";

    if(items.length === 0){

        

        return;
    }

    items.forEach(product => {

        productContainer.innerHTML += `

        <div class="card">

            <div class="product-image">

                ${
                product.image
                ?
                `<img src="${product.image}" alt="${product.title}">`
                :
                ""
                }

            </div>

            <div class="card-content">

                <h3>
                ${product.title}
                </h3>

                <p>
                ${product.description}
                </p>

                <div class="price">
                ${product.price}
                </div>

                <a
                href="${product.link}"
                target="_blank"
                class="buy-btn"
                >
                Buy Now
                </a>

            </div>

        </div>

        `;
    });
}

renderProducts(products);

/* =====================================
   SEARCH
===================================== */

const searchInput =
document.getElementById("searchInput");

if(searchInput){

searchInput.addEventListener("input", e => {

    const keyword =
    e.target.value.toLowerCase();

    const filteredProducts =
    products.filter(product =>

        product.title
        .toLowerCase()
        .includes(keyword)

    );

    renderProducts(filteredProducts);

});

}

/* =====================================
   NAVBAR SHADOW ON SCROLL
===================================== */

window.addEventListener("scroll", () => {

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.35)";

    }else{

        navbar.style.boxShadow =
        "none";

    }

});

/* =====================================
   SCROLL ANIMATION
===================================== */

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

    if(entry.isIntersecting){

        entry.target.classList.add("show");

    }

});

},{
threshold:0.15
});

document
.querySelectorAll(
".card,.why-card,.testimonial,.stat-box"
)
.forEach(item => {

observer.observe(item);

});

/* =====================================
   FUTURE PRODUCT LOADER
===================================== */

function addProduct(
title,
description,
price,
image,
link
){

products.push({

title,
description,
price,
image,
link

});

renderProducts(products);

}

/* =====================================
   DEMO
   REMOVE LATER
===================================== */

// addProduct(
// "Demo Product",
// "Replace with your own product",
// "₹999",
// "",
// "#"
// );

console.log(
"Luminack Premium Loaded Successfully"
);
const menuBtn =
document.getElementById("menuBtn");

const sideMenu =
document.getElementById("sideMenu");

const closeMenu =
document.getElementById("closeMenu");

const overlay =
document.getElementById("menuOverlay");

menuBtn.addEventListener("click",()=>{

sideMenu.classList.add("active");
overlay.classList.add("active");

});

closeMenu.addEventListener("click",()=>{

sideMenu.classList.remove("active");
overlay.classList.remove("active");

});

overlay.addEventListener("click",()=>{

sideMenu.classList.remove("active");
overlay.classList.remove("active");

});
