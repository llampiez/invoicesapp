import { StyledComponent } from '../base-components/styled-component.js';

export class VATNumber extends StyledComponent {
  static getCustomAttributes() {
    return ['label', 'vat-number'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'VAT Number';
    const vatNumber = this.getAttribute('vat-number') ?? 'VAT number not provided';

    this.shadowRoot.innerHTML = `
      <style>
        .vat-number-container {
          display: flex;
          justify-content: ${this.justifyContent};
          gap: ${this.gap};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          padding: ${this.padding};
          margin: ${this.margin};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
        }
      </style>
      <div class="vat-number-container">
        <span>${label}</span>
        <span>${vatNumber}</span>
      </div>
    `;
  }
}

customElements.define('vat-number', VATNumber);
