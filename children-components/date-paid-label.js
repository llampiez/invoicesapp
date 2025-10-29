import { StyledComponent } from '../base-components/styled-component.js';

export class DatePaidLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Date paid';

    this.shadowRoot.innerHTML = `
      <style>
        .date-paid-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="date-paid-label">${value}</span>
    `;
  }
}

customElements.define('date-paid-label', DatePaidLabel);
