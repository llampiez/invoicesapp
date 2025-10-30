import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceNumberValue extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? '';

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
      <span>${value}</span>
    `;
  }
}

customElements.define('invoice-number-value', InvoiceNumberValue);
