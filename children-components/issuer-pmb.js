import { StyledComponent } from '../base-components/styled-component.js';

export class IssuerPmb extends StyledComponent {
  static getCustomAttributes() {
    return ['pmb'];
  }

  render() {
    const pmb = this.getAttribute('pmb') || 'Issuer PMB';

    this.shadowRoot.innerHTML = `
      <style>
        span {
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          padding: ${this.padding};
          margin: ${this.margin};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          color: ${this.color};
        }
      </style>
      <span>${pmb}</span>
    `;
  }
}

customElements.define('issuer-pmb', IssuerPmb);
