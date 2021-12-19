const urlParams = new URLSearchParams(window.location.search);

const collection = urlParams.get("collection");

//https://garnkbh-492c.restdb.io/rest/garnkbh?q={%22collection%22:%20%22Accessories%22}
const url = `https://garnkbh-492c.restdb.io/rest/garnkbh?q={"collection": "${collection}"}`;
console.log(url)
const options = {
  headers: {
    "x-apikey": "61acfc6f72a03f5dae822131",
  },
};
fetch(url,options)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    // console.log(data);
    handleProductList(data);
  });


function handleProductList(data) {

  data.forEach(showProduct);
}
function showProduct( product){
  
        console.log(product);
       
        const template = document.querySelector("#template2").content;
        const copy = template.cloneNode(true);

        // copy.querySelector("h5").textcontent=`${product.brand}`;
      
        // copy.querySelector(".brand").textContent=product.brand;
        // copy.querySelector("a").href = "product.html?id=" + product._id;
        copy.querySelector("a").href +=product._id;

        copy.querySelector(".productName1").textContent=product.name;
     copy.querySelector( "img"  ).src =product.image ;
     copy.querySelector(".price").textContent = `${product.price}`;
    //  copy.querySelector(".brand").textContent = product.brand;

        const parent = document.querySelector("main");
        parent.appendChild(copy);
  
;}