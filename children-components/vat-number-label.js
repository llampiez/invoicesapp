import { StyledComponent } from '../base-components/styled-component.js';

export class VATNumberLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'VAT Number';

    this.shadowRoot.innerHTML = `
      <style>
        .vat-number-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="vat-number-label">${value}</span>
    `;
  }
}

customElements.define('vat-number-label', VATNumberLabel);
