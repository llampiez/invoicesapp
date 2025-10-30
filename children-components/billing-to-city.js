import { StyledComponent } from '../base-components/styled-component.js';

export class BillingToCity extends StyledComponent {
  static getCustomAttributes() {
    return ['city'];
  }

  render() {
    const city = this.getAttribute('city') || 'Billing To City';

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
      <span>${city}</span>
    `;
  }
}

customElements.define('billing-to-city', BillingToCity);