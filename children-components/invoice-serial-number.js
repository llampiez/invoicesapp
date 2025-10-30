import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceSerialNumber extends StyledComponent {
  static getCustomAttributes() {
    return ['labe,', 'value'];
  }

  render() {
    const label = this.getAttribute('label') || 'Invoice serial#: ';
    const value = this.getAttribute('value') || '0';

    this.shadowRoot.innerHTML = `
      <style>
        span {
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          padding: ${this.padding};
          margin: ${this.margin};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          color: ${this.color};
        }
      </style>
      <span>${label}${value}</span>
    `;
  }
}

customElements.define('invoice-serial-number', InvoiceSerialNumber);
