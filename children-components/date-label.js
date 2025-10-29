import { StyledComponent } from '../base-components/styled-component.js';

export class DateLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Date';

    this.shadowRoot.innerHTML = `
      <style>
        .date-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="date-label">${value}</span>
    `;
  }
}

customElements.define('date-label', DateLabel);
