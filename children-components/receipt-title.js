import { StyledComponent } from '../base-components/styled-component.js';

export class ReceiptTitle extends StyledComponent {
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        h1 {
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
          font-family: ${this.fontFamily};
        }
      </style>
      <h1>Receipt</h1>
    `;
  }
}

customElements.define('receipt-title', ReceiptTitle);
