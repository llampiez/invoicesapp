import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowQuantity extends StyledComponent {
  static getCustomAttributes() {
    return ['quantity'];
  }

  render() {
    const quantity = this.getAttribute('quantity') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
        .tr-quantity {
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
      <div class="tr-quantity">${quantity}</div>
    `;
  }
}

customElements.define('tr-quantity', TableRowQuantity);
