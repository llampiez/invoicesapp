import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceDateLabel extends StyledComponent {
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
      <span>Invoice date</span>
    `;
  }
}

customElements.define('invoice-date-label', InvoiceDateLabel);
