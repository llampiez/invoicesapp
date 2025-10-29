import { StyledComponent } from '../base-components/styled-component.js';

export class GCLCapitalNote extends StyledComponent {
  static getCustomAttributes() {
    return ['amount', 'currency-name'];
  }

  render() {
    const amount = this.getAttribute('amount') ?? '';
    const currencyName = this.getAttribute('currency-name') ?? 'USD';

    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
        }
      </style>
      <p>GCL share capital: ${currencyName} ${amount}</p>
    `;
  }
}

customElements.define('gcl-capital-note', GCLCapitalNote);
