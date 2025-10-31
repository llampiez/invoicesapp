import { LocationComponent } from '../base-components/location-component.js';

export class IssuerInformation extends LocationComponent {
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: ${this.display};
          flex-direction: ${this.flexDirection};
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
        <slot name="name"></slot>
        ${this.building ? `<span>${this.building}</span>` : ''}
        ${this.street ? `<span>${this.street}</span>` : ''}
        ${this.pmb ? `<span>PMB ${this.pmb}</span>` : ''}
        ${this.address ? `<span>${this.address}</span>` : ''}
        ${this.country ? `<span>${this.country}</span>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('issuer-information', IssuerInformation);
