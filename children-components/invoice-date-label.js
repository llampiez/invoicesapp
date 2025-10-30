import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceDateLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Invoice date';

    this.shadowRoot.innerHTML = `
      <style>
        .invoice-date-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="invoice-date-label">${label}</span>
    `;
  }
}

customElements.define('invoice-date-label', InvoiceDateLabel);
