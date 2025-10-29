export class OrganizationLogo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
    this._calculatedWidth = null;
    this._calculatedHeight = null;
    this._inherentMaxWidth = 250;
    this._inherentMaxHeight = 150;
  }

  static get observedAttributes() {
    return ['logo-src', 'logo-alt', 'max-width', 'max-height', 'mode'];
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

  get mode() {
    return this._mode;
  }

  set mode(value) {
    if (value === 'preview' || value === 'edit') {
      this._mode = value;
      this.setAttribute('mode', value);
    }
  }

  _calculateDimensions(naturalWidth, naturalHeight) {
    const aspectRatio = naturalWidth / naturalHeight;

    const maxWidth = this.getAttribute('max-width')
      ? parseFloat(this.getAttribute('max-width'))
      : this._inherentMaxWidth;
    const maxHeight = this.getAttribute('max-height')
      ? parseFloat(this.getAttribute('max-height'))
      : this._inherentMaxHeight;

    let width = naturalWidth;
    let height = naturalHeight;

    if (width > maxWidth) {
      width = maxWidth;
      height = width / aspectRatio;
    }

    if (height > maxHeight) {
      height = maxHeight;
      width = height * aspectRatio;
    }

    this._calculatedWidth = Math.round(width);
    this._calculatedHeight = Math.round(height);
  }

  _onImageLoad(event) {
    const img = event.target;

    if (img.naturalWidth && img.naturalHeight) {
      this._calculateDimensions(img.naturalWidth, img.naturalHeight);
      this._updateImageDimensions();
    }
  }

  _updateImageDimensions() {
    const img = this.shadowRoot.querySelector('.organization-logo');
    if (img && this._calculatedWidth && this._calculatedHeight) {
      img.style.width = `${this._calculatedWidth}px`;
      img.style.height = `${this._calculatedHeight}px`;
    }
  }

  render() {
    const logoSrc = this.getAttribute('logo-src') ?? '';
    const logoAlt =
      this.getAttribute('logo-alt') ??
      'Image associated with the logo of the organization.';

    this.shadowRoot.innerHTML = `
      <style>
        .organization-logo {
          display: block;
          width: auto;
          height: auto;
        }
      </style>
      <img class="organization-logo" src="${logoSrc}" alt="${logoAlt}" />
    `;

    const img = this.shadowRoot.querySelector('.organization-logo');
    if (img) {
      img.addEventListener('load', this._onImageLoad.bind(this));

      if (img.complete && img.naturalWidth) {
        this._calculateDimensions(img.naturalWidth, img.naturalHeight);
        this._updateImageDimensions();
      }
    }
  }
}

customElements.define('organization-logo', OrganizationLogo);
