import { StyledComponent } from '../base-components/styled-component.js';

export class SummaryDate extends StyledComponent {
  static getCustomAttributes() {
    return ['date-value', 'date-format'];
  }

  render() {
    const dateValue = this.getAttribute('date-value') ?? new Date();
    const dateFormat = this.getAttribute('date-format') ?? 'D MMM YYYY';

    const dateFormatted = dayjs(dateValue).format(dateFormat);

    this.shadowRoot.innerHTML = `
      <style>
        .summary-date {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="summary-date">Summary for ${dateFormatted}</span>
    `;
  }
}

customElements.define('summary-date', SummaryDate);
