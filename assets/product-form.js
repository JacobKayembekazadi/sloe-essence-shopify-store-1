// Product Form JavaScript
class ProductForm extends HTMLElement {
  constructor() {
    super();

    this.form = document.querySelector('form.product-form[id^="product-form-"]') || 
                this.closest('.product')?.querySelector('form[id^="product-form-"]');
    
    if (!this.form) return;

    this.form.querySelector('[name="id"]') || this.createVariantInput();
    this.cartNotification = document.querySelector('cart-notification');
    this.submitButton = this.form.querySelector('[id^="ProductSubmitButton-"]');
    this.quantityInput = this.form.querySelector('[id^="Quantity-"]');
    this.currentVariant = null;
    this.product = null;

    // Get product data from JSON
    const productJson = document.querySelector('[data-product-json]');
    if (productJson) {
      try {
        this.product = JSON.parse(productJson.textContent);
      } catch (e) {
        console.error('Error parsing product JSON:', e);
      }
    }

    if (this.form) {
      this.form.addEventListener('submit', this.onSubmitHandler.bind(this));
      this.quantityInput?.addEventListener('change', this.onQuantityChange.bind(this));
    }

    // Variant selectors
    this.variantSelects = this.form.querySelectorAll('select[id^="Option-"]');
    this.variantSelects.forEach((select) => {
      select.addEventListener('change', this.onVariantChange.bind(this));
    });

    // Update initial variant
    if (this.product) {
      this.updateVariant();
    }
  }

  createVariantInput() {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'id';
    this.form.appendChild(input);
    return input;
  }

  onSubmitHandler(evt) {
    evt.preventDefault();
    
    if (this.submitButton.getAttribute('aria-disabled') === 'true') return;

    this.handleErrorMessage();
    this.submitButton.classList.add('loading');
    this.submitButton.setAttribute('aria-disabled', true);
    this.querySelector('.loading-overlay__spinner').classList.remove('hidden');

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: `application/json`
      },
      body: JSON.stringify({
        ...this.serializeForm(this.form),
        sections: this.getSectionsToRender().map((section) => section.id),
        sections_url: window.location.pathname
      })
    };

    fetch(`${window.Shopify.routes.root}cart/add.js`, config)
      .then((response) => response.json())
      .then((response) => {
        if (response.status) {
          this.handleErrorMessage(response.description);
          return;
        }

        this.handleSuccess(response);
      })
      .catch((error) => {
        console.error('Error:', error);
        this.handleErrorMessage(error.message || 'An error occurred');
      })
      .finally(() => {
        this.submitButton.classList.remove('loading');
        this.submitButton.removeAttribute('aria-disabled');
        this.querySelector('.loading-overlay__spinner').classList.add('hidden');
      });
  }

  onVariantChange() {
    this.updateVariant();
    this.updateMedia();
    this.updatePrice();
    this.updateStockStatus();
    this.updateAddButton();
  }

  onQuantityChange() {
    const quantity = parseInt(this.quantityInput.value);
    if (quantity < 1) {
      this.quantityInput.value = 1;
    }
  }

  updateVariant() {
    if (!this.product || !this.product.variants) return;

    const formData = new FormData(this.form);
    const selectedOptions = Array.from(this.variantSelects, (select) => {
      return formData.get(`options[${select.dataset.optionPosition}]`) || select.value;
    });

    const matchedVariant = this.product.variants.find((variant) => {
      return variant.options.every((option, index) => {
        return option === selectedOptions[index];
      });
    });

    if (matchedVariant) {
      this.currentVariant = matchedVariant;
      const variantInput = this.form.querySelector('[name="id"]');
      if (variantInput) variantInput.value = matchedVariant.id;
    }
  }

  updateMedia() {
    if (!this.currentVariant || !this.currentVariant.featured_media) return;

    const mediaId = this.currentVariant.featured_media.id;
    const activeMedia = this.closest('.product').querySelector(`[data-media-id="${mediaId}"]`);

    if (activeMedia) {
      // Hide all media items
      this.closest('.product').querySelectorAll('.product__media-item').forEach((item) => {
        item.classList.remove('is-active');
      });

      // Show selected media
      activeMedia.classList.add('is-active');

      // Update thumbnails
      const activeThumbnail = this.closest('.product').querySelector(`.product__media-thumbnail[data-media-id="${mediaId}"]`);
      if (activeThumbnail) {
        this.closest('.product').querySelectorAll('.product__media-thumbnail').forEach((thumb) => {
          thumb.classList.remove('is-active');
        });
        activeThumbnail.classList.add('is-active');
      }
    }
  }

  updatePrice() {
    if (!this.currentVariant) return;

    const priceContainer = this.closest('.product').querySelector('#Price-' + this.dataset.sectionId);
    if (!priceContainer) return;

    fetch(`${window.Shopify.routes.root}variants/${this.currentVariant.id}?view=price`)
      .then((response) => response.text())
      .then((html) => {
        const priceHTML = new DOMParser().parseFromString(html, 'text/html');
        priceContainer.innerHTML = priceHTML.querySelector('[id^="Price-"]')?.innerHTML || priceContainer.innerHTML;
      })
      .catch((error) => {
        console.error('Error updating price:', error);
      });
  }

  updateStockStatus() {
    if (!this.currentVariant) return;

    const stockContainer = this.closest('.product').querySelector('#Stock-' + this.dataset.sectionId);
    if (!stockContainer) return;

    const quantity = this.currentVariant.inventory_quantity || 0;
    const lowStockThreshold = parseInt(this.closest('.product').dataset.lowStockThreshold) || 5;
    const stockStatus = stockContainer.querySelector('.product__stock-status');

    if (stockStatus) {
      stockStatus.className = 'product__stock-status';
      
      if (quantity > lowStockThreshold) {
        stockStatus.classList.add('product__stock-status--in-stock');
        stockStatus.innerHTML = '<span aria-hidden="true">✓</span> ' + window.variantStrings?.inStock || 'In Stock';
      } else if (quantity > 0) {
        stockStatus.classList.add('product__stock-status--low-stock');
        stockStatus.innerHTML = '<span aria-hidden="true">⚠</span> ' + (window.variantStrings?.lowStock || `Only ${quantity} left in stock`);
      } else {
        stockStatus.classList.add('product__stock-status--out-of-stock');
        stockStatus.innerHTML = '<span aria-hidden="true">✗</span> ' + (window.variantStrings?.soldOut || 'Out of Stock');
      }
    }
  }

  updateAddButton() {
    if (!this.currentVariant) return;

    const isAvailable = this.currentVariant.available;
    this.submitButton.disabled = !isAvailable;

    if (isAvailable) {
      this.submitButton.querySelector('span').textContent = window.variantStrings?.addToCart || 'Add to cart';
    } else {
      this.submitButton.querySelector('span').textContent = window.variantStrings?.soldOut || 'Sold out';
    }
  }

  getSectionsToRender() {
    return [
      {
        id: 'cart-icon-bubble',
        section: 'cart-icon-bubble',
        selector: '.shopify-section'
      },
      {
        id: 'cart-live-region-text',
        section: 'cart-live-region-text',
        selector: '.shopify-section'
      },
      {
        id: 'main-cart-footer',
        section: document.getElementById('shopify-section-cart-footer')?.dataset.id,
        selector: '[id^="CartFooter-"]'
      }
    ];
  }

  serializeForm(form) {
    const formData = new FormData(form);
    const serialized = {};
    for (const [key, value] of formData.entries()) {
      if (key.includes('options[')) {
        const optionMatch = key.match(/options\[(.+)\]/);
        if (optionMatch) {
          const optionName = optionMatch[1];
          if (!serialized.options) serialized.options = {};
          serialized.options[optionName] = value;
        }
      } else {
        serialized[key] = value;
      }
    }
    return serialized;
  }

  handleSuccess(response) {
    // Update cart count
    fetch(`${window.Shopify.routes.root}cart.js`)
      .then((response) => response.json())
      .then((cart) => {
        const cartCount = document.querySelector('#cart-icon-bubble .cart-count-bubble span');
        if (cartCount) {
          cartCount.textContent = cart.item_count;
        }
      });

    // Show success message or open cart drawer
    if (this.cartNotification) {
      this.cartNotification.renderContents(response);
    } else {
      // Fallback: redirect to cart or show alert
      window.location.href = `${window.Shopify.routes.root}cart`;
    }
  }

  handleErrorMessage(errorMessage = false) {
    // Error handling - can be enhanced with a toast/notification system
    if (errorMessage) {
      console.error('Cart error:', errorMessage);
    }
  }
}

customElements.define('product-form', ProductForm);

// Quantity Input Component
class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true });

    this.querySelectorAll('button').forEach((button) =>
      button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;
    const button = event.currentTarget;

    if (button.name === 'plus') {
      this.input.stepUp();
    } else {
      this.input.stepDown();
    }

    if (previousValue !== this.input.value) {
      this.input.dispatchEvent(this.changeEvent);
    }
  }
}

customElements.define('quantity-input', QuantityInput);

// Product Media Gallery Component
class ProductMediaGallery extends HTMLElement {
  constructor() {
    super();
    this.thumbnails = this.querySelectorAll('.product__media-thumbnail');
    this.mediaItems = this.querySelectorAll('.product__media-item');

    this.thumbnails.forEach((thumb) => {
      thumb.addEventListener('click', this.onThumbnailClick.bind(this));
    });
  }

  onThumbnailClick(event) {
    event.preventDefault();
    const mediaId = event.currentTarget.dataset.mediaId;

    // Update active thumbnail
    this.thumbnails.forEach((thumb) => thumb.classList.remove('is-active'));
    event.currentTarget.classList.add('is-active');

    // Update active media
    this.mediaItems.forEach((item) => item.classList.remove('is-active'));
    const activeMedia = this.querySelector(`.product__media-item[data-media-id="${mediaId}"]`);
    if (activeMedia) {
      activeMedia.classList.add('is-active');
      
      // Lazy load video if it's a video media
      if (activeMedia.dataset.mediaType === 'video') {
        const video = activeMedia.querySelector('video');
        if (video && video.readyState === 0) {
          video.load();
        }
      }
    }
  }
}

customElements.define('product-media-gallery', ProductMediaGallery);

// Initialize product data
document.addEventListener('DOMContentLoaded', function() {
  const productForms = document.querySelectorAll('product-form');
  productForms.forEach((form) => {
    // Set product data from JSON in the page
    const productDataElement = document.querySelector('[data-product-json]');
    if (productDataElement) {
      form.product = JSON.parse(productDataElement.textContent);
    }
  });
});

