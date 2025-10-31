import { LocationComponent } from '../base-components/location-component.js';

export class BillToInformation extends LocationComponent {
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
        <span>Bill to</span>
        <slot name="person-name"></slot>
        <slot name="company-name"></slot>
        ${this.street ? `<span>${this.street}</span>` : ''}
        ${this.city ? `<span>${this.city}</span>` : ''}
        ${this.address ? `<span>${this.address}</span>` : ''}
        ${this.country ? `<span>${this.country}</span>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('bill-to-information', BillToInformation);
