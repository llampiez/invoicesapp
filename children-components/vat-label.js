import { StyledComponent } from '../base-components/styled-component.js';

export class VATLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'VAT (20%)';

    this.shadowRoot.innerHTML = `
      <style>
        .vat-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="vat-label">${label}</span>
    `;
  }
}

customElements.define('vat-label', VATLabel);
