import { StyledComponent } from '../base-components/styled-component.js';

export class BillingToCountry extends StyledComponent {
  static getCustomAttributes() {
    return ['country'];
  }

  render() {
    const country = this.getAttribute('country') || 'Billing To Country';

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
      <span>${country}</span>
    `;
  }
}

customElements.define('billing-to-country', BillingToCountry);