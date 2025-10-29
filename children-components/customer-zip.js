import { StyledComponent } from '../base-components/styled-component.js';

export class CustomerZip extends StyledComponent {
  static getCustomAttributes() {
    return ['zip'];
  }

  render() {
    const zip = this.getAttribute('zip') || 'Customer Zip';

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
      <span>${zip}</span>
    `;
  }
}

customElements.define('customer-zip', CustomerZip);
