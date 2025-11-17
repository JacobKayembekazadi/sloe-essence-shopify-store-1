// Product Recommendations JavaScript
class ProductRecommendations extends HTMLElement {
  constructor() {
    super();
    this.initRecommendations();
  }

  initRecommendations() {
    const handleIntersection = (entries, observer) => {
      if (!entries[0].isIntersecting) return;
      observer.unobserve(this);

      const productId = this.dataset.productId || document.querySelector('[data-product-id]')?.dataset.productId;
      if (!productId) return;

      fetch(`${window.Shopify.routes.root}recommendations/products?product_id=${productId}&limit=${this.dataset.limit || 4}&section_id=${this.dataset.sectionId}`)
        .then((response) => response.text())
        .then((text) => {
          const html = document.createElement('div');
          html.innerHTML = text;
          const recommendations = html.querySelector('[id^="ProductRecommendations-"]');

          if (recommendations && recommendations.innerHTML.trim().length) {
            const container = this.querySelector('[id^="ProductRecommendations-"]');
            if (container) {
              container.innerHTML = recommendations.innerHTML;
            }
          }
        })
        .catch((error) => {
          console.error('Error loading product recommendations:', error);
        });
    };

    new IntersectionObserver(handleIntersection.bind(this), {
      rootMargin: '0px 0px 400px 0px'
    }).observe(this);
  }
}

customElements.define('product-recommendations', ProductRecommendations);

// Set product ID for recommendations
document.addEventListener('DOMContentLoaded', function() {
  const productId = document.querySelector('[data-product-id]')?.dataset.productId;
  if (productId) {
    const recommendationsSection = document.querySelector('product-recommendations');
    if (recommendationsSection) {
      recommendationsSection.dataset.productId = productId;
    }
  }
});

