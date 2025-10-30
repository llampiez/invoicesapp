import { StyledComponent } from '../base-components/styled-component.js';

export class TableHeadTransactionID extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') || 'Transaction ID';

    this.shadowRoot.innerHTML = `
      <style>
        .th-transaction-id {
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
      <div class="th-transaction-id">${label}</div>
    `;
  }
}

customElements.define('th-transaction-id', TableHeadTransactionID);
