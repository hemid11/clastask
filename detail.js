let id = new URLSearchParams(location.search).get("id");

function getProductDetails(id) {
    if (!id) {
        console.error('ID parametresi bulunamadı');
        return;
    }

    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => {
            const html = `
                <h2>${data.title}</h2>
                <p>${data.description}</p>
                <p>Price: $${data.price}</p>
                <img src="${data.image}" alt="${data.title}">
            `;

            document.body.innerHTML = html;
        })
        .catch(error => {
            console.error('Hata:', error);
        });
}

getProductDetails(id);