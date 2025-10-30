import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceTitle extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Invoice';

    this.shadowRoot.innerHTML = `
      <style>
        .invoice-title {
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
          font-family: ${this.fontFamily};
        }
      </style>
      <h1 class="invoice-title">${value}</h1>
    `;
  }
}

customElements.define('invoice-title', InvoiceTitle);
