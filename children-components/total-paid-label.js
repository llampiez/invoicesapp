import { StyledComponent } from '../base-components/styled-component.js';

export class TotalPaidLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Total';

    this.shadowRoot.innerHTML = `
      <style>
        .total-paid-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="total-paid-label">${value}</span>
    `;
  }
}

customElements.define('total-paid-label', TotalPaidLabel);
