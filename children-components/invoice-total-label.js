import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceTotalLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Invoice Total:';

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
      <span>${label}</span>
    `;
  }
}

customElements.define('invoice-total-label', InvoiceTotalLabel);
