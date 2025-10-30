import { StyledComponent } from '../base-components/styled-component.js';

export class SubtotalLabel extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Subtotal';

    this.shadowRoot.innerHTML = `
      <style>
        .subtotal-label {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="subtotal-label">${label}</span>
    `;
  }
}

customElements.define('subtotal-label', SubtotalLabel);
