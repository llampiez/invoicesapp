import { StyledComponent } from '../base-components/styled-component.js';

export class Amount extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? 'Amount';

    this.shadowRoot.innerHTML = `
      <style>
        .amount {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="amount">${value}</span>
    `;
  }
}

customElements.define('amount-label', Amount);
