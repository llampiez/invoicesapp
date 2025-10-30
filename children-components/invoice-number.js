import { StyledComponent } from '../base-components/styled-component';

export class InvoiceNumber extends StyledComponent {
  static getCustomAttributes() {
    return ['label', 'value'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Invoice number:';
    const value = this.getAttribute('value') ?? '';

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
      <span>${label} ${value}</span>
    `;
  }
}

customElements.define('invoice-number', InvoiceNumber);
