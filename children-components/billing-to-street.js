import { StyledComponent } from '../base-components/styled-component.js';

export class BillingToStreet extends StyledComponent {
  static getCustomAttributes() {
    return ['street'];
  }

  render() {
    const street = this.getAttribute('street') || 'Billing To Street';

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
      <span>${street}</span>
    `;
  }
}

customElements.define('billing-to-street', BillingToStreet);