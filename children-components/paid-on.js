import { StyledComponent } from '../base-components/styled-component.js';

export class PaidOn extends StyledComponent {
  static getCustomAttributes() {
    return ['amount', 'date-value', 'date-format'];
  }

  render() {
    const amount = this.getAttribute('amount') ?? '0.00$';
    const dateValue = this.getAttribute('date-value') ?? new Date();
    const dateFormat = this.getAttribute('date-format') ?? 'MMMM D, YYYY';

    const formatedDate = dayjs(dateValue).format(dateFormat);

    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
        }
      </style>
      <p>${amount} Paid on ${formatedDate}</p>
    `;
  }
}

customElements.define('paid-on', PaidOn);
