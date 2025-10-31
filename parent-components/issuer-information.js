import { StyledComponent } from '../base-components/styled-component.js';

export class IssuerInformation extends StyledComponent {
  static getCustomAttributes() {
    return ['building', 'street', 'zip', 'country', 'pmb'];
  }

  render() {
    const building = this.getAttribute('building') ?? '';
    const street = this.getAttribute('street') ?? '';
    const zip = this.getAttribute('zip') ?? '';
    const country = this.getAttribute('country') ?? '';
    const pmb = this.getAttribute('pmb') ?? '';

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
        <slot name="issuer-name"></slot>
        ${building ? `<span>${building}</span>` : ''}
        ${street ? `<span>${street}</span>` : ''}
        ${zip ? `<span>${zip}</span>` : ''}
        ${country ? `<span>${country}</span>` : ''}
        ${pmb ? `<span>${pmb}</span>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('issuer-information', IssuerInformation);
