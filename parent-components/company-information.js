import { StyledComponent } from '../base-components/styled-component.js';

export class IssuerInformation extends StyledComponent {
  static getCustomAttributes() {
    return ['zip', 'country', 'address', 'region'];
  }

  render() {
    const zip = this.getAttribute('zip') ?? '';
    const country = this.getAttribute('country') ?? '';
    const address = this.getAttribute('address') ?? '';
    const region = this.getAttribute('region') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          padding: ${this.padding};
          margin: ${this.margin};
          text-align: ${this.textAlign};
          line-height: ${this.lineHeight};
        }
        
      </style>
      <div class="container">
        <slot name="company-name"></slot>
        ${zip ? `<span>${zip}</span>` : ''}
        ${country ? `<span>${country}</span>` : ''}
        ${region ? `<span>${region}</span>` : ''}
        ${address ? `<span>${address}</span>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('issuer-information', IssuerInformation);
