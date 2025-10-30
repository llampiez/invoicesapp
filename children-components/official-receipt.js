import { StyledComponent } from '../base-components/styled-component.js';

export class OfficialReceipt extends StyledComponent {
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        span {
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
        }
      </style>
      <span>OFFICIAL RECEIPT</span>
    `;
  }
}

customElements.define('official-receipt', OfficialReceipt);
