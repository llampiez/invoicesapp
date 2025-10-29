import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowPaymentMethod extends StyledComponent {
  static getCustomAttributes() {
    return [
      'value',
    ];
  }

  render() {
    const value = this.getAttribute('value') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
        .tr-payment-method {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          padding: ${this.padding};
          margin: ${this.margin};
          text-align: ${this.textAlign};
          line-height: ${this.lineHeight};
        }
      </style>
      <div class="tr-payment-method">${value}</div>
    `;
  }
}

customElements.define('tr-payment-method', TableRowPaymentMethod);
