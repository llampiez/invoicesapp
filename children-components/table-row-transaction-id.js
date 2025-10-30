import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowTransactionID extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? '0';

    this.shadowRoot.innerHTML = `
      <style>
        .tr-transaction-id {
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
      <div class="tr-transaction-id">${value}%</div>
    `;
  }
}

customElements.define('tr-transaction-id', TableRowTransactionID);
