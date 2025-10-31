import { StyledComponent } from '../base-components/styled-component.js';

export class IssuerName extends StyledComponent {
  static getCustomAttributes() {
    return ['name'];
  }

  render() {
    const name = this.getAttribute('name') || '';

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
      <span>${name}</span>
    `;
  }
}

customElements.define('issuer-name', IssuerName);
