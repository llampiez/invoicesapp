import { StyledComponent } from '../base-components/styled-component.js';

export class DateValue extends StyledComponent {
  static getCustomAttributes() {
    return ['value', 'format'];
  }

  render() {
    const value = this.getAttribute('value') ?? new Date();
    const format = this.getAttribute('format') ?? 'MMMM D, YYYY';

    const formattedDate = dayjs(value).format(format);

    this.shadowRoot.innerHTML = `
      <style>
        .date-value {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="date-value">${formattedDate}</span>
    `;
  }
}

customElements.define('date-value', DateValue);
