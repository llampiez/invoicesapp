import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceNumberLabel extends StyledComponent {
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        span {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span>Invoice number</span>
    `;
  }
}

customElements.define('invoice-number-label', InvoiceNumberLabel);
