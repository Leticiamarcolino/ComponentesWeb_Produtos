class ProductCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const title = this.getAttribute('title');
        const img = this.getAttribute('img');
        const originalPrice = this.getAttribute('original-price');
        const discountedPrice = this.getAttribute('discounted-price');
        const installment = this.getAttribute('installment');
        const reviews = this.getAttribute('reviews');

        this.innerHTML = `
            <div class="card">
                <div class="img-produto">
                    <img src="${img}" alt="${title}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">
                        <span class="price">${originalPrice}</span>
                        <br>
                        <span class="discount">${discountedPrice}</span>
                        <br>
                        <span class="installment">${installment}</span>
                        <br>
                        <span class="reviews">${reviews}</span>
                    </p>
                    <a href="#" class="btn btn-primary button-comprar">Comprar</a>
                </div>
            </div>
        `;
    }
}

customElements.define('product-card', ProductCard);
