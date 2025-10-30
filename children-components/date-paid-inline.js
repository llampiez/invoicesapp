import { StyledComponent } from '../base-components/styled-component.js';

export class DatePaidInline extends StyledComponent {
  static getCustomAttributes() {
    return ['label', 'date-value', 'date-format'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Date Paid:';
    const dateValue = this.getAttribute('date-value') ?? new Date();
    const dateFormat = this.getAttribute('date-format') ?? 'MMMM D, YYYY';

    const formatedDate = dayjs(dateValue).format(dateFormat);

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
      <span>${label} ${formatedDate}</span>
    `;
  }
}

customElements.define('date-paid-inline', DatePaidInline);
