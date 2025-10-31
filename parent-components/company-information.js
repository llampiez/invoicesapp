import { LocationComponent } from '../base-components/location-component.js';

export class CompanyInformation extends LocationComponent {
  render() {
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
        ${this.zip ? `<span>${this.zip}</span>` : ''}
        ${this.country ? `<span>${this.country}</span>` : ''}
        ${this.region ? `<span>${this.region}</span>` : ''}
        ${this.address ? `<span>${this.address}</span>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('company-information', CompanyInformation);
