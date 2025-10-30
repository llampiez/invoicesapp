import { StyledComponent } from '../base-components/styled-component.js';

export class TotalPaidInline extends StyledComponent {
  static getCustomAttributes() {
    return ['label', 'value', 'currency'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Total Paid: ';

    const value = this.getAttribute('value') ?? '0.00';
    const currency = this.getAttribute('currency') ?? 'USD';

    const content = `${currency} ${value}`;

    this.shadowRoot.innerHTML = `
      <style>
        span {
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
        }
      </style>
      <span>${label}${content}</span>
    `;
  }
}

customElements.define('date-paid-inline', TotalPaidInline);
