import { StyledComponent } from '../base-components/styled-component.js';

export class CustomerEmail extends StyledComponent {
  static getCustomAttributes() {
    return ['email'];
  }

  render() {
    const email = this.getAttribute('email') || 'Customer Email';

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

customElements.define('customer-email', CustomerEmail);
