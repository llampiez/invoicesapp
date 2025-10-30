import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceSubtitle extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
        h2 {
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
          font-family: ${this.fontFamily};
        }
      </style>
      <h2>${label}</h2>
    `;
  }
}

customElements.define('invoice-subtitle', InvoiceSubtitle);
