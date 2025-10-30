import { StyledComponent } from '../base-components/styled-component';

export class VATNumber extends StyledComponent {
  static getCustomAttributes() {
    return ['label', 'value'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'VAT number:';
    const value = this.getAttribute('value') ?? 'VAT number not provied.';

    this.shadowRoot.innerHTML = `
      <style>
        span {
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
        }
      </style>
      <span>${label} ${value}</span>
    `;
  }
}

customElements.define('vat-number', VATNumber);
