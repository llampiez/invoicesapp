import { StyledComponent } from '../base-components/styled-component';

export class DateIssuedInline extends StyledComponent {
  static getCustomAttributes() {
    return ['label', 'date-value', 'date-format'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Date Issued: ';
    const dateValue = this.getAttribute('date-value') ?? new Date();
    const dateFormat = this.getAttribute('date-format') ?? 'MMM DD, YYYY';

    const dateFormatted = dayjs(dateValue).format(dateFormat);

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
      <span>${label}${dateFormatted}</span>
    `;
  }
}

customElements.define('date-issued-inline', DateIssuedInline);
