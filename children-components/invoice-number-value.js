import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceNumberValue extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Not provided';

    this.shadowRoot.innerHTML = `
      <style>
        .invoice-number-value {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="invoice-number-value">${value}</span>
    `;
  }
}

customElements.define('invoice-number-value', InvoiceNumberValue);
