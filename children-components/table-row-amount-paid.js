import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowAmountPaid extends StyledComponent {
  static getCustomAttributes() {
    return ['amount', 'currency', 'currency-position'];
  }

  render() {
    const amount = this.getAttribute('amount') ?? '';
    const currency = this.getAttribute('currency') ?? '$';
    const currencyPosition = this.getAttribute('currency-position') ?? 'after';

    const content = currencyPosition === 'before'
      ? `${currency}${amount}`
      : `${amount}${currency}`;

    this.shadowRoot.innerHTML = `
      <style>
        .tr-amount-paid {
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
      <div class="tr-amount-paid">${content}</div>
    `;
  }
}

customElements.define('tr-amount-paid', TableRowAmountPaid);
