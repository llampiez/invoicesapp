import { StyledComponent } from '../base-components/styled-component';

export class AmountPaidBlock extends StyledComponent {
  static getCustomAttributes() {
    return ['label', 'price', 'currency', 'currency-position'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Amount paid';

    const price = this.getAttribute('price') ?? '0.00';
    const currency = this.getAttribute('currency') ?? '$';
    const currencyPosition = this.getAttribute('currency-position') ?? 'after';

    const content =
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
        <div>${label}/div>
        <div>${content}</div>
      </div>
    `;
  }
}

customElements.define('amount-paid-block', AmountPaidBlock);
