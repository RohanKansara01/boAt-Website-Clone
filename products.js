var allData;
fetch("product.json")
    .then(response => response.json())
    .then(data => {
        allData = data.productsData;
        displayProducts(allData);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
//function for Displying the Data on Page
function displayProducts(data) {
    var parent = document.querySelector("#showProducts");
    parent.innerHTML = "";
    var outOfStock = document.querySelector("#ifOutOfStock")
    outOfStock.innerHTML = ""

    if (data.length === 0) {
        var noProduct = document.createElement("h2");
        noProduct.setAttribute("class", "noProductAvl");
        noProduct.innerText = "We are currently out of stock in this category";

        outOfStock.appendChild(noProduct)
    }
    data.forEach(element => {

        var productDiv = document.createElement("div");
        productDiv.setAttribute("class", "productDiv");
        var leftSideDiv = document.createElement("div");
        leftSideDiv.setAttribute("class", "leftSideDiv");
        var rightSideDiv = document.createElement("div");
        rightSideDiv.setAttribute("class", "rightSideDiv");

        //left Side Elements
        var img = document.createElement("img");
        img.setAttribute("class", "productImage");

        var keyline = document.createElement("p");
        keyline.setAttribute("class", "keyline")

        //Right Side Elements


        //Rating Div - For Product Rating
        var ratingDiv = document.createElement("div");
        ratingDiv.setAttribute("class", "ratingDiv")

        var spanForIcon = document.createElement("span");
        spanForIcon.setAttribute("class", "spanForIcon");

        var rating = document.createElement("p")
        rating.setAttribute("class", "ratingOfProduct")


        //Product Name
        var name = document.createElement("h2");
        name.setAttribute("class", "productName")

        //Price Details Div
        var priceDetails = document.createElement("div");
        priceDetails.setAttribute("class", "priceDetails");

        var price = document.createElement("p");
        price.setAttribute("class", "salePrice");

        var strikedoffprice = document.createElement("p");
        strikedoffprice.setAttribute("class", "normalPrice");

        var off = document.createElement("p");
        off.setAttribute("class", "offerPercantage");


        //Features Details Div
        var featureDiv = document.createElement("div");
        featureDiv.setAttribute("class", "featureDiv")

        var line = document.createElement("hr");
        line.setAttribute("class", "horizontal-line")

        var featureOne = document.createElement("p");
        featureOne.setAttribute("class", "first-feature")

        var featureTwo = document.createElement("p");
        featureTwo.setAttribute("class", "second-feature");


        //Add To Cart Button Div
        var buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("class", "buttonDiv")

        var addToCartBtn = document.createElement("button");
        addToCartBtn.setAttribute("class", "addToCartBtn")


        //Adding Data To Elements From JOSN
        img.src = element.image_url;
        keyline.innerText = element.keyLine;
        spanForIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#f4c730}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>'
        rating.innerText = element.rating;
        name.innerText = element.name;
        strikedoffprice.innerText = element.strikedoffprice;
        price.innerText = element.price;
        off.innerText = element.off;
        featureOne.innerText = element.featureOne;
        featureTwo.innerText = element.featureTwo;
        addToCartBtn.innerText = "Add To Cart"


        leftSideDiv.appendChild(img);
        leftSideDiv.appendChild(keyline);

        ratingDiv.appendChild(spanForIcon)
        ratingDiv.appendChild(rating)
        priceDetails.appendChild(price)
        priceDetails.appendChild(strikedoffprice);
        priceDetails.appendChild(off)
        featureDiv.appendChild(line);
        featureDiv.appendChild(featureOne);
        featureDiv.appendChild(featureTwo);
        buttonDiv.appendChild(addToCartBtn);

        rightSideDiv.appendChild(ratingDiv)
        rightSideDiv.appendChild(name);
        rightSideDiv.appendChild(priceDetails);
        rightSideDiv.appendChild(featureDiv);
        rightSideDiv.appendChild(buttonDiv);

        productDiv.appendChild(leftSideDiv);
        productDiv.appendChild(rightSideDiv);

        parent.appendChild(productDiv);

        //Add to cart Button function
        addToCartBtn.addEventListener("click", function () {
            var cartItem = JSON.parse(localStorage.getItem("cart")) || [];
            var itemAlreadyInCart = cartItem.some(function (product) {
                return product.name === element.name;
            });
            if (!itemAlreadyInCart) {
                cartItem.push(element);
                localStorage.setItem("cart", JSON.stringify(cartItem));
                addToCartBtn.innerText = "Added in Cart";
            } else {
                alert("Item already in cart");
            }
        })
        productDiv.addEventListener("click", function(){
            localStorage.setItem("product", JSON.stringify(element));
            window.location.href = "singleproduct.html";
        })
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var sortBy = document.getElementById("sort-by");

    sortBy.addEventListener("change", function () {
        var selectedOptionValue = sortBy.value;
        var sortedData;

        if (selectedOptionValue === "low-high") {
            sortedData = [...allData].sort((a, b) => a.price - b.price);
            displayProducts(sortedData);
        } else if (selectedOptionValue === "high-low") {
            sortedData = [...allData].sort((a, b) => b.price - a.price);
            displayProducts(sortedData);
        } else if (selectedOptionValue === "top-rated") {
            sortedData = [...allData].sort((a, b) => b.rating - a.rating);
            displayProducts(sortedData);
        } else if (selectedOptionValue === "alphabetical-az") {
            sortedData = [...allData].sort((a, b) => a.name.localeCompare(b.name));
            displayProducts(sortedData);
        } else if (selectedOptionValue === "alphabetical-za") {
            sortedData = [...allData].sort((a, b) => b.name.localeCompare(a.name));
            displayProducts(sortedData);
        } else if (selectedOptionValue === "Default") {
            displayProducts(allData);
        }
        // console.log(selectedOptionValue);
        // console.log(sortedData);
    });
    var categoryFilter = document.getElementById("filter");
    categoryFilter.addEventListener("change", function () {
        var selectedCategory = categoryFilter.value;
        var filteredData;
        if (selectedCategory === "all") {
            filteredData = allData;
        } else {
            filteredData = allData.filter(function (product) {
                return product.category === selectedCategory;
            });
        }
        displayProducts(filteredData);
    });
});