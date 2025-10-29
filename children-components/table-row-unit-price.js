import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowUnitPrice extends StyledComponent {
  static getCustomAttributes() {
    return ['price', 'currency', 'currency-position'];
  }

  render() {
    const price = this.getAttribute('price') ?? '';
    const currency = this.getAttribute('currency') ?? '$';
    const currencyPosition = this.getAttribute('currency-position') ?? 'after';

    const content = currencyPosition === 'before'
      ? `${currency}${price}`
      : `${price}${currency}`;

    this.shadowRoot.innerHTML = `
      <style>
        .unit-price {
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
      <div class="unit-price">${content}</div>
    `;
  }
}

customElements.define('table-row-unit-price', TableRowUnitPrice);
