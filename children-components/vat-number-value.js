import { StyledComponent } from '../base-components/styled-component.js';

export class VATNumberValue extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'VAT number not provided';

    this.shadowRoot.innerHTML = `
      <style>
        .vat-number-value {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="vat-number-value">${value}</span>
    `;
  }
}

customElements.define('vat-number-value', VATNumberValue);
