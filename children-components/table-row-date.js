import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowDate extends StyledComponent {
  static getCustomAttributes() {
    return ['date-value', 'date-format'];
  }

  render() {
    const dateValue = this.getAttribute('date-value') ?? new Date();
    const dateFormat = this.getAttribute('date-format') ?? 'MMMM D, YYYY';

    const formattedDate = dayjs(dateValue).format(dateFormat);

    this.shadowRoot.innerHTML = `
      <style>
        .tr-date {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          padding: ${this.padding};
          margin: ${this.margin};
          text-align: ${this.textAlign};
          line-height: ${this.lineHeight};
        }
      </style>
      <div class="tr-date">${formattedDate}</div>
    `;
  }
}

customElements.define('tr-date', TableRowDate);
