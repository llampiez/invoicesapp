import { TableCell } from '../base-components/table-cell.js';

export class TableRowAmount extends TableCell {
  static getContentAttributes() {
    return ['amount', 'currency', 'currency-position'];
  }

  renderContent() {
    const amount = this.getAttribute('amount') ?? '';
    const currency = this.getAttribute('currency') ?? '$';
    const currencyPosition = this.getAttribute('currency-position') ?? 'after';

    if (currencyPosition === 'before') {
      return `<div class="amount">${currency}${amount}</div>`;
    }

    return `<div class="amount">${amount}${currency}</div>`;
  }
}

customElements.define('table-row-amount', TableRowAmount);
