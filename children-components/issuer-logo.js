import { StyledComponent } from '../base-components/styled-component.js';

export class IssuerLogo extends StyledComponent {
  static getCustomAttributes() {
    return ['src', 'alt', 'scale'];
  }

  render() {
    const src = this.getAttribute('src') ?? '';
    const alt =
      this.getAttribute('alt') ??
      'Image associated with the logo of the issuer.';
    const scale = parseFloat(this.getAttribute('scale')) || 1;

    this.shadowRoot.innerHTML = `
      <style>
        .issuer-logo {
          display: block;
        }
      </style>
      <img class="issuer-logo" src="${src}" alt="${alt}" />
    `;

    const img = this.shadowRoot.querySelector('.issuer-logo');

    const setSize = () => {
      if (img.naturalWidth && img.naturalHeight) {
        const scaledWidth = img.naturalWidth * scale;
        const scaledHeight = img.naturalHeight * scale;
        img.style.width = `${scaledWidth}px`;
        img.style.height = `${scaledHeight}px`;
      }
    };

    img.addEventListener('load', setSize);
    if (img.complete) {
      setSize();
    }
  }
}

customElements.define('issuer-logo', IssuerLogo);
