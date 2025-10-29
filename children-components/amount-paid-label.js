import { StyledComponent } from '../base-components/styled-component.js';

export class AmountPaidLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Amount paid';

    this.shadowRoot.innerHTML = `
      <style>
        .amount-paid-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="amount-paid-label">${value}</span>
    `;
  }
}

customElements.define('amount-paid-label', AmountPaidLabel);
