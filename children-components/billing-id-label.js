import { StyledComponent } from '../base-components/styled-component.js';

export class BillingIdLabel extends StyledComponent {
  render() {
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
      <span>Billing ID</span>
    `;
  }
}

customElements.define('billing-id-label', BillingIdLabel);
