import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowReceiptNumber extends StyledComponent {
  static getCustomAttributes() {
    return [
      'value',
    ];
  }

  render() {
    const value = this.getAttribute('value') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
        .tr-receipt-number {
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
      <div class="tr-receipt-number">${value}</div>
    `;
  }
}

customElements.define('tr-receipt-number', TableRowReceiptNumber);
