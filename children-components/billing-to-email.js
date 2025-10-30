import { StyledComponent } from '../base-components/styled-component.js';

export class BillingToEmail extends StyledComponent {
  static getCustomAttributes() {
    return ['email'];
  }

  render() {
    const email = this.getAttribute('email') || 'Billing To Email';

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
      <span>${email}</span>
    `;
  }
}

customElements.define('billing-to-email', BillingToEmail);