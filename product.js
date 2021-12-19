


const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");


const url = "https://garnkbh-492c.restdb.io/rest/garnkbh/"+id;
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
    productlist(data);
  });
  
    function productlist(product) {
    console.log(product);
 document.querySelector(".price").textContent = product.price;
document.querySelector(".productimage").src=product.image;
  document.querySelector(".smallimg1").src=product.img2;
document.querySelector(".smallimg2").src=product.img3;

  document.querySelector(".description1").textContent = product.description1;

  document.querySelector(".description2").innerHTML = product.description2;
 
  document.querySelector(".description3").textContent = product.description3;
  document.querySelector(".description4").textContent = product.description4;

 document.querySelector(".productName").textContent=product.name;

}

// //   document.querySelector("a").href = "productpage.html?id=" + product.id;
//   document.querySelector(".productName").textContent=product.name;

//   document.querySelector(".productimage").src = product.image;
// document.querySelector(".price").textContent = `${product.price}`;

// document.querySelector(".smallimg1").src=product.img1;
// document.querySelector(".smallimg2").src=product.img2;

//   document.querySelector(".description1").textContent = product.description1;

//   document.querySelector(".description2").textContent = product.description2;
//   document.querySelector(".description3").textContent = product.description3;
//   document.querySelector(".description4").textContent = product.description4;}








var poke1 = document.getElementById('poke1');
    var cmp = document.getElementById('counter');
    poke1.addEventListener('click', myfonction1)
    function myfonction1() {
      cmp.innerHTML = parseInt(cmp.innerHTML) -1;}

      var poke2 = document.getElementById('poke2');
    var cmp = document.getElementById('counter');
    poke2.addEventListener('click', myfonction)
    function myfonction() {
      cmp.innerHTML = parseInt(cmp.innerHTML) +1;}