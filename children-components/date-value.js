import { StyledComponent } from '../base-components/styled-component.js';

export class DateValue extends StyledComponent {
  static getCustomAttributes() {
    return ['date-value', 'date-format'];
  }

  render() {
    const dateValue = this.getAttribute('date-value') ?? new Date();
    const dateFormat = this.getAttribute('date-format') ?? 'MMMM D, YYYY';

    const formattedDate = dayjs(dateValue).format(dateFormat);

    this.shadowRoot.innerHTML = `
      <style>
        span {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span>${formattedDate}</span>
    `;
  }
}

customElements.define('date-value', DateValue);
