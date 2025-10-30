import { StyledComponent } from '../base-components/styled-component.js';

export class SubtotalPaidLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Subtotal';

    this.shadowRoot.innerHTML = `
      <style>
        .subtotal-paid-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="subtotal-paid-label">${value}</span>
    `;
  }
}

customElements.define('subtotal-paid-label', SubtotalPaidLabel);
