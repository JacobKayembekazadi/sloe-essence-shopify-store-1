// Global JavaScript for Sloe Essence Theme

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu__close');
  const body = document.body;

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      body.classList.add('mobile-menu-open');
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        body.classList.remove('mobile-menu-open');
      });
    }

    // Close menu when clicking overlay
    body.addEventListener('click', function(e) {
      if (body.classList.contains('mobile-menu-open') && 
          !mobileMenu.contains(e.target) && 
          !mobileMenuToggle.contains(e.target)) {
        mobileMenu.classList.remove('active');
        body.classList.remove('mobile-menu-open');
      }
    });
  }
});

// Accessibility: Trap focus in modals
function trapFocus(element, namespace = 'trapFocus') {
  const focusableElements = Array.from(
    element.querySelectorAll(
      'summary, a[href], button:enabled, [tabindex]:not([tabindex^="-"]), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe'
    )
  );
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', function(e) {
    if (e.code.toUpperCase() !== 'TAB') return;

    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  });

  element.addEventListener('keyup', function(e) {
    if (e.code.toUpperCase() === 'ESCAPE') {
      const openDetailsElement = element.closest('details[open]');
      if (openDetailsElement) {
        openDetailsElement.removeAttribute('open');
        openDetailsElement.querySelector('summary').focus();
      }
    }
  });
}

// Custom element for details modal
if (!customElements.get('details-modal')) {
  customElements.define('details-modal', class DetailsModal extends HTMLElement {
    constructor() {
      super();
      this.detailsContainer = this.querySelector('details');
      this.summaryToggle = this.querySelector('summary');

      this.detailsContainer.addEventListener('keyup', (event) => event.code.toUpperCase() === 'ESCAPE' && this.close());
      this.summaryToggle.addEventListener('click', this.onSummaryClick.bind(this));
      this.querySelector('button[type="button"]')?.addEventListener('click', this.close.bind(this));

      this.summaryToggle.setAttribute('role', 'button');
    }

    isOpen() {
      return this.detailsContainer.hasAttribute('open');
    }

    onSummaryClick(event) {
      event.preventDefault();
      event.target.closest('details').hasAttribute('open') ? this.close() : this.open(event);
    }

    onBodyClick(event) {
      if (!this.contains(event.target) || event.target.classList.contains('modal-overlay')) this.close(false);
    }

    open(event) {
      this.onBodyClickEvent = this.onBodyClickEvent || this.onBodyClick.bind(this);
      event.target.closest('details').setAttribute('open', true);
      document.body.addEventListener('click', this.onBodyClickEvent);
      document.body.classList.add('overflow-hidden');

      trapFocus(this.detailsContainer, this.getAttribute('id'));
    }

    close(focusToggle = true) {
      this.detailsContainer.removeAttribute('open');
      document.body.removeEventListener('click', this.onBodyClickEvent);
      document.body.classList.remove('overflow-hidden');

      if (focusToggle) this.summaryToggle.focus();
    }
  });
}

