import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowAmount extends StyledComponent {
  static getCustomAttributes() {
    return ['amount', 'currency', 'currency-position'];
  }

  render() {
    const amount = this.getAttribute('amount') ?? '';
    const currency = this.getAttribute('currency') ?? '$';
    const currencyPosition = this.getAttribute('currency-position') ?? 'after';

    const content =
      currencyPosition === 'before'
        ? `${currency}${amount}`
        : `${amount}${currency}`;

    this.shadowRoot.innerHTML = `
      <style>
        div {
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
      <div>${content}</div>
    `;
  }
}

customElements.define('tr-amount', TableRowAmount);
