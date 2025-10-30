import { StyledComponent } from '../base-components/styled-component.js';

export class OfficialReceipt extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'OFFICIAL RECEIPT';

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
      <span>${value}</span>
    `;
  }
}

customElements.define('official-receipt', OfficialReceipt);
