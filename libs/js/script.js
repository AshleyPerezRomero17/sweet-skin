//start slide show
var home = document.querySelector("#home-page");
var products = document.querySelector("#products-page");
var myIndex = 0;
var i = 0;

function slideShow() {
    "use strict";
    var slide = document.getElementsByClassName("slide"); // select the slide

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"; // hide slide originally 
    }

    myIndex++;

    if (myIndex > slide.length) {
        myIndex = 1;
    }

    slide[myIndex - 1].style.display = "block"; // show active slide
    setTimeout(slideShow, 4000); // Change image every 4 seconds
}

if (home) {
    slideShow();
}
// end slide show 

// start product page
async function getProducts() {
    "use strict";
    var response = await fetch('/libs/js/product.json');
    var products = await response.json();
    var container = document.getElementById("products-container");

    // loop through products returned from json
    for (i = 0; i < products.length; i++) {
        // create product div
        var product = document.createElement("div");
        product.classList.add("product");

        var productImgSrc = document.createElement("img");
        const imgSrc = products[i].imgSrc;
        productImgSrc.classList.add("main-img");
        productImgSrc.setAttribute("src", imgSrc);
        productImgSrc.setAttribute("alt", "productPhoto");
        product.appendChild(productImgSrc);

        var productHoverImgSrc = document.createElement("img");
        const hoverImgSrc = products[i].hoverImgSrc;
        productHoverImgSrc.classList.add("hover-img");
        productHoverImgSrc.setAttribute("src", hoverImgSrc);
        productImgSrc.setAttribute("alt", "productHoverImg");
        product.appendChild(productHoverImgSrc);

        // create elements for product
        var productHeading = document.createElement("h4");
        const name = document.createTextNode(products[i].name);
        productHeading.appendChild(name);
        product.appendChild(productHeading);

        var productCategory = document.createElement("span");
        const category = document.createTextNode(products[i].category);
        productCategory.appendChild(category);
        product.appendChild(productCategory);

        var productDescription = document.createElement("p");
        const description = document.createTextNode(products[i].description);
        productDescription.appendChild(description);
        productDescription.classList.add("description");
        product.appendChild(productDescription);

        var productPrice = document.createElement("span");
        const price = document.createTextNode(products[i].price);
        productPrice.classList.add("price");
        productPrice.appendChild(price);
        product.appendChild(productPrice);

        var productReviews = document.createElement("div");
        productReviews.innerHTML = (products[i].reviews);
        product.appendChild(productReviews);

        var buyButton = document.createElement("input");
        buyButton.classList.add("button");
        buyButton.classList.add("purchase");
        buyButton.setAttribute("type", 'button');
        buyButton.setAttribute("value", 'Add to Bag');
        product.appendChild(buyButton);

        // ADD PRODUCTS TO CONTAINER
        container.append(product);
    }
}

if (products) {
    getProducts();
}

// contact form, alert user on submit
function handleSubmit() {
    return alert('Thank You For Submitting!');
}