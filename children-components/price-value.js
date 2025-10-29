import { StyledComponent } from '../base-components/styled-component.js';

export class PriceValue extends StyledComponent {
  static getCustomAttributes() {
    return ['value', 'currency', 'currency-position'];
  }

  render() {
    const value = this.getAttribute('value') ?? '0.00';
    const currency = this.getAttribute('currency') ?? '$';
    const currencyPosition = this.getAttribute('currency-position') ?? 'after';

    const content =
      currencyPosition === 'before'
        ? `${currency}${value}`
        : `${value}${currency}`;

    this.shadowRoot.innerHTML = `
      <style>
        .price-value {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="price-value">${content}</span>
    `;
  }
}

customElements.define('price-value', PriceValue);
