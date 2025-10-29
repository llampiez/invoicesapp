import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceNumber extends StyledComponent {
  static getCustomAttributes() {
    return ['number', 'label'];
  }

  render() {
    const number = this.getAttribute('number') ?? 'Invoice number not provided';
    const label = this.getAttribute('label') ?? 'Invoice number';

    this.shadowRoot.innerHTML = `
      <style>
        .invoice-number-container {
          display: flex;
          justify-content: ${this.justifyContent};
          gap: ${this.gap};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          padding: ${this.padding};
          margin: ${this.margin};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
        }
      </style>
      <div class="invoice-number-container">
        <span>${label}</span>
        <span>${number}</span>
      </div>
    `;
  }
}

customElements.define('invoice-number', InvoiceNumber);
