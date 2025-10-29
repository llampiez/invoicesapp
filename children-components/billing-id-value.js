import { StyledComponent } from '../base-components/styled-component.js';

export class BillingIdValue extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Not provided';

    this.shadowRoot.innerHTML = `
      <style>
        .billing-id-value {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="billing-id-value">${value}</span>
    `;
  }
}

customElements.define('billing-id-value', BillingIdValue);
