import { StyledComponent } from '../base-components/styled-component.js';

export class PaymentHistory extends StyledComponent {
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .label {
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          text-align: ${this.textAlign};
          text-transform: ${this.textTransform};
          letter-spacing: ${this.letterSpacing};
          line-height: ${this.lineHeight};
          margin: ${this.margin};
          background-color: ${this.backgroundColor};
          border: ${this.borderWidth} solid ${this.borderColor};
          border-radius: ${this.borderRadius};
          padding: ${this.padding};
          font-family: ${this.fontFamily};
        }
      </style>
      <p class="label">Payment History</p>
    `;
  }
}

customElements.define('payment-history', PaymentHistory);
