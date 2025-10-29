import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceNumberLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Invoice number';

    this.shadowRoot.innerHTML = `
      <style>
        .invoice-number-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="invoice-number-label">${value}</span>
    `;
  }
}

customElements.define('invoice-number-label', InvoiceNumberLabel);
