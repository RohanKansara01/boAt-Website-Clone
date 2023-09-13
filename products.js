fetch("product.json")
    .then(response => response.json())
    .then(data => {
        const allData = data.productsData;
        displayProducts(allData);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

//function for Displying the Data on Page
function displayProducts(data) {
    data.forEach(element => {
        var productDiv = document.createElement("div");
        productDiv.setAttribute("class", "productDiv");

        var leftSideDiv = document.createElement("div");
        leftSideDiv.setAttribute("class", "leftSideDiv");

        var img = document.createElement("img");
        img.setAttribute("class", "productImage");

        var keyline = document.createElement("p");
        keyline.setAttribute("class", "keyline")

        var rightSideDiv = document.createElement("div");
        rightSideDiv.setAttribute("class", "rightSideDiv");

        var name = document.createElement("h2");
        name.setAttribute("class", "productName")

        var priceDetails = document.createElement("div");
        priceDetails.setAttribute("class", "priceDetails");

        var strikedoffprice = document.createElement("p");
        strikedoffprice.setAttribute("class", "normalPrice");

        var price = document.createElement("p");
        price.setAttribute("class", "salePrice");

        var off = document.createElement("p");
        off.setAttribute("class", "offerPercantage");

        var featureDiv = document.createElement("div");
        featureDiv.setAttribute("class", "featureDiv")

        var line = document.createElement("hr");
        line.setAttribute("class", "horizontal-line")

        var featureOne = document.createElement("p");
        featureOne.setAttribute("class", "first-feature")

        var featureTwo = document.createElement("p");
        featureTwo.setAttribute("class", "second-feature");

        var buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("class", "buttonDiv")

        var addToCartBtn = document.createElement("button");
        addToCartBtn.setAttribute("class", "addToCartBtn")

        img.src = element.image_url;
        keyline.innerText = element.keyLine;
        name.innerText = element.name;
        strikedoffprice.innerText = element.strikedoffprice;
        price.innerText = element.price;
        off.innerText = element.off;
        featureOne.innerText = element.featureOne;
        featureTwo.innerText = element.featureTwo;
        addToCartBtn.innerText = "Add To Cart"
        
        leftSideDiv.appendChild(img);
        leftSideDiv.appendChild(keyline);

        rightSideDiv.appendChild(name);
        rightSideDiv.appendChild(priceDetails);
        rightSideDiv.appendChild(featureDiv);
        rightSideDiv.appendChild(buttonDiv);

        priceDetails.appendChild(strikedoffprice);
        priceDetails.appendChild(price)
        priceDetails.appendChild(off)

        featureDiv.appendChild(line);
        featureDiv.appendChild(featureOne);
        featureDiv.appendChild(featureTwo);

        buttonDiv.appendChild(addToCartBtn);

        productDiv.appendChild(leftSideDiv);
        productDiv.appendChild(rightSideDiv);
                  
        var parent = document.querySelector("#showProducts");
        parent.appendChild(productDiv);
    });
}
