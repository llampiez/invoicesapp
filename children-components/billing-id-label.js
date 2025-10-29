import { StyledComponent } from '../base-components/styled-component.js';

export class BillingIdLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Billing ID';

    this.shadowRoot.innerHTML = `
      <style>
        .billing-id-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="billing-id-label">${value}</span>
    `;
  }
}

customElements.define('billing-id-label', BillingIdLabel);
