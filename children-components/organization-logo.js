import { StyledComponent } from '../base-components/styled-component.js';

export class OrganizationLogo extends StyledComponent {
  constructor() {
    super();
    this._calculatedWidth = null;
    this._calculatedHeight = null;
    this._inherentMaxWidth = 250;
    this._inherentMaxHeight = 150;
  }

  static getCustomAttributes() {
    return ['logo-src', 'logo-alt', 'max-width', 'max-height'];
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
