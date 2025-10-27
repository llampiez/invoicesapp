export class InvoiceLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview'; // Default state: preview or edit
    this._aspectRatio = null; // Stores the calculated aspect ratio
  }

  // Define the attributes we want to observe
  static get observedAttributes() {
    return [
      'logo-src',
      'logo-alt',
      'max-width',
      'max-height',
      'object-fit',
      'margin',
      'padding',
      'border',
      'border-radius',
      'mode',
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'mode') {
        this._mode = newValue || 'preview';
      }
      this.render();
    }
  }

  // Getters for the states
  get mode() {
    return this._mode;
  }

  set mode(value) {
    if (value === 'preview' || value === 'edit') {
      this._mode = value;
      this.setAttribute('mode', value);
    }
  }

  render() {
    const logoSrc = this.getAttribute('logo-src') || '';
    const logoAlt =
      this.getAttribute('logo-alt') ||
      'Image associated with the logo of the organization issuing this invoice.';

    const maxWidth = this.getAttribute('max-width') || '200px';
    const maxHeight = this.getAttribute('max-height') || '100px';
    const objectFit = this.getAttribute('object-fit') || 'contain';
    const margin = this.getAttribute('margin') || '0';
    const padding = this.getAttribute('padding') || '0';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';

    this.shadowRoot.innerHTML = `
      <style>
        .invoice-logo-container {
          display: inline-block;
          margin: ${margin};
          padding: ${padding};
          border: ${border};
          border-radius: ${borderRadius};
          max-width: ${maxWidth};
          max-height: ${maxHeight};
        }

        .invoice-logo {
          display: block;
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: ${objectFit};
        }

        .invoice-logo.error {
          display: none;
        }
      </style>
      <div class="invoice-logo-container">
        <img class="invoice-logo" src="${logoSrc}" alt="${logoAlt}" />
      </div>
    `;

    // Add event listeners after rendering
    this._attachImageListeners();
  }

  _attachImageListeners() {
    const img = this.shadowRoot.querySelector('.invoice-logo');

    if (img) {
      img.addEventListener('load', () => {
        this._aspectRatio = img.naturalWidth / img.naturalHeight;
        console.log(`Logo loaded - Dimensions: ${img.naturalWidth}x${img.naturalHeight}, Aspect Ratio: ${this._aspectRatio.toFixed(2)}`);
      });

      img.addEventListener('error', () => {
        console.error('Failed to load logo image:', this.getAttribute('logo-src'));
        img.classList.add('error');
      });
    }
  }
}

// Register the web component
customElements.define('invoice-logo', InvoiceLogo);
