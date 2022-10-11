//start slide show
// created vars, document is an object that represents your html file. Queryselector 
// allows you to find elements that can be either ids or classes.
var home = document.querySelector("#home-page");
var products = document.querySelector("#products-page");
var myIndex = 0;
var i = 0;

function slideShow() {
    // my js validator was complaining that use strict was missing"
    "use strict";
    // storing each slide in the variable called slide.
    var slide = document.getElementsByClassName("slide");
// looping through slides
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none"; // hiding original slide
    }
// logic to know which slide to show 
    myIndex++;

    if (myIndex > slide.length) {
        myIndex = 1;
    }

    slide[myIndex - 1].style.display = "block"; // show active slide
    setTimeout(slideShow, 4000); // Change image every 4 seconds
}
// checks if your on the home page, then call the slideshow function so the slides change
if (home) {
    slideShow();
}
// end slide show 

// start product page

// async means that this function can happen asynchrously with other logic
async function getProducts() {
    "use strict";
    // response is storing the data from our json file which is an array of objects
    // await means that you wait for the promise that fetch returns to be complete
    // response.json is how we access our key and value pairs in the json file
    var response = await fetch('/libs/js/product.json');
    var products = await response.json();
    var container = document.getElementById("products-container");

    // loop through products returned from json
    for (i = 0; i < products.length; i++) {
        // create product div
        var product = document.createElement("div");
        product.classList.add("product");

        // create main image elements
        var productImgSrc = document.createElement("img");
        const imgSrc = products[i].imgSrc;
        productImgSrc.classList.add("main-img");
        productImgSrc.setAttribute("src", imgSrc);
        productImgSrc.setAttribute("alt", "productPhoto");
        product.appendChild(productImgSrc);

        // create hover image elements
        var productHoverImgSrc = document.createElement("img");
        const hoverImgSrc = products[i].hoverImgSrc;
        productHoverImgSrc.classList.add("hover-img");
        productHoverImgSrc.setAttribute("src", hoverImgSrc);
        productImgSrc.setAttribute("alt", "productHoverImg");
        product.appendChild(productHoverImgSrc);

        // create title elements
        var productHeading = document.createElement("h4");
        const name = document.createTextNode(products[i].name);
        productHeading.appendChild(name);
        product.appendChild(productHeading);

        // create span elements for category
        var productCategory = document.createElement("span");
        const category = document.createTextNode(products[i].category);
        productCategory.appendChild(category);
        product.appendChild(productCategory);

        // create p elements
        var productDescription = document.createElement("p");
        const description = document.createTextNode(products[i].description);
        productDescription.appendChild(description);
        productDescription.classList.add("description");
        product.appendChild(productDescription);

        // create span elements for price
        var productPrice = document.createElement("span");
        const price = document.createTextNode(products[i].price);
        productPrice.classList.add("price");
        productPrice.appendChild(price);
        product.appendChild(productPrice);

        // create div elements for review
        var productReviews = document.createElement("div");
        productReviews.innerHTML = (products[i].reviews);
        product.appendChild(productReviews);

        // create input elements for buy button
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

// if on products page, call getProducts function
if (products) {
    getProducts();
}

// when the user hits submit in the contact form, we want to alert user that they submitted successfully
function handleSubmit() {
    return alert('Thank You For Submitting!');
}