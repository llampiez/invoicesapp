import { BaseRowCell } from './base-row-cell.js';

export class RowTax extends BaseRowCell {
  static getContentAttributes() {
    return ['tax', 'symbol'];
  }

  renderContent() {
    const tax = this.getAttribute('tax') ?? '0';
    const symbol = this.getAttribute('symbol') ?? '%';

    return `<div class="tax">${tax}${symbol}</div>`;
  }
}

customElements.define('row-tax', RowTax);
