function getProducts(){
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => showProduct(data))
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}

getProducts()
  function showProduct(data){
    const productsContainer = document.querySelector('.row');
    let productCardsHTML = '';
    data.forEach(product => {
      productCardsHTML += `
        <div class="col-lg-3">
          <div class="card" style="width: 100%;">
            <img class="card-img-top" src="${product.image}" alt="${product.title}">
            <div class="card-body">
              <a href="detail.html?id=${product.id}"><h5 class="card-title">${product.title}</h5></a>
              <p class="card-text">${product.description}</p>
              <p class="card-text"><strong>Price: $${product.price}</strong></p>
              <a href="#" class="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      `;
    });
    productsContainer.innerHTML = productCardsHTML;
  }


  // let id=new URLSearchParams(location.search).get("id")
// console.log(id)

// const productsContainer = document.querySelector('.card');