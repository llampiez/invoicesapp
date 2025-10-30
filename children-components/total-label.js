import { StyledComponent } from '../base-components/styled-component.js';

export class TotalPaidLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Total';

    this.shadowRoot.innerHTML = `
      <style>
        .total-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="total-label">${label}</span>
    `;
  }
}

customElements.define('total-label', TotalPaidLabel);
