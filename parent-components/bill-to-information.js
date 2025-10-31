import { StyledComponent } from '../base-components/styled-component.js';

export class BillToInformation extends StyledComponent {
  static getCustomAttributes() {
    return ['zip', 'country', 'city', 'street'];
  }

  render() {
    const city = this.getAttribute('city') ?? '';
    const zip = this.getAttribute('zip') ?? '';
    const country = this.getAttribute('country') ?? '';
    const street = this.getAttribute('street') ?? '';

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
        <span class="label">Bill to</span>
        <slot name="person-name"></slot>
        <slot name="company-name"></slot>
        ${zip ? `<span>${zip}</span>` : ''}
        ${country ? `<span>${country}</span>` : ''}
        ${city ? `<span>${city}</span>` : ''}
        ${street ? `<span>${street}</span>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('bill-to-information', BillToInformation);
