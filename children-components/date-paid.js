import { StyledComponent } from '../base-components/styled-component.js';

export class DatePaid extends StyledComponent {
  static getCustomAttributes() {
    return ['date-value', 'date-format', 'label'];
  }

  render() {
    const dateValue = this.getAttribute('date-value') ?? new Date();
    const dateFormat = this.getAttribute('date-format') ?? 'MMMM D, YYYY';
    const label = this.getAttribute('label') ?? 'Date paid';

    const formatedDate = dayjs(dateValue).format(dateFormat);

    this.shadowRoot.innerHTML = `
      <style>
        .date-paid-container {
          display: flex;
          justify-content: ${this.justifyContent};
          gap: ${this.gap};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          padding: ${this.padding};
          margin: ${this.margin};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
        }
      </style>
      <div class="date-paid-container">
        <span>${label}</span>
        <span>${formatedDate}</span>
      </div>
    `;
  }
}

customElements.define('date-paid', DatePaid);
