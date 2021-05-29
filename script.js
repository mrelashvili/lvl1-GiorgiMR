"use strict";
////////////////////////////

const container = document.querySelector(".main__container--bottom");
const clck = document.querySelector(".vertical-line-four");
const three = document.querySelector(".vertical-line-three");

///////////////////////////////////////

const getData = function (amount) {
  fetch(`https://fakestoreapi.com/products?limit=${amount}`)
    .then((res) => res.json())
    .then((data) => info(data));
};

const info = function (data) {
  data.forEach((results) => {
    console.log(results);
    container.innerHTML += `
    <div class='col col-lg-3 col-md-4 col-sm-6'>
          <div class='card'>
    <img class="card-img-top image-card" src="${results.image}" alt="Card image cap">

      <div class='card-body'>
          <div>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="far fa-star"></i>
          </div>
      <div class="product__descr">
       <p>${results.title}</p>
      </div>
      <div class="product__price">
        <h2>$${results.price}</h2>
      </div>
      </div>
              </div>
              </div>
              </div>`;
  });
};

clck.addEventListener("click", () => getData(5));
three.addEventListener("click", () => getData(10));
