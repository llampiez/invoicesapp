import { StyledComponent } from '../base-components/styled-component.js';

export class ShippingCharge extends StyledComponent {
  static getCustomAttributes() {
    return ['discount-value', 'price', 'currency', 'currency-position'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Discount';
    const discountValue = this.getAttribute('discount-value') ?? '0.00';

    const contentLabel = `${label} ${discountValue}%`;

    const price = this.getAttribute('price') ?? '0.00';
    const currency = this.getAttribute('currency') ?? '';
    const currencyPosition = this.getAttribute('currency-position') ?? 'after';

    const contentPrice =
      currencyPosition === 'before'
        ? `${currency}${price}`
        : `${price}${currency}`;

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: ${this.display};
          flex-direction: ${this.flexDirection};
          gap: ${this.gap};
          align-items: ${this.alignItems};
          justify-content: ${this.justifyContent};
          background-color: ${this.backgroundColor};
          padding: ${this.padding};
          margin: ${this.margin};
          border: ${this.borderWidth} solid ${this.borderColor};
          border-radius: ${this.borderRadius};
          width: ${this.width};
          height: ${this.height};
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
        }
      </style>
      <div class="container">
        <div>${contentLabel}/div>
        <div>${contentPrice}</div>
      </div>
    `;
  }
}

customElements.define('shipping-charge-block', ShippingCharge);
