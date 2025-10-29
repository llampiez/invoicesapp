import { TableCell } from '../base-components/table-cell.js';

export class TableRowUnitPrice extends TableCell {
  static getContentAttributes() {
    return ['price', 'currency', 'currency-position'];
  }

  renderContent() {
    const price = this.getAttribute('price') ?? '';
    const currency = this.getAttribute('currency') ?? '$';
    const currencyPosition = this.getAttribute('currency-position') ?? 'after';

    if (currencyPosition === 'before') {
      return `<div class="unit-price">${currency}${price}</div>`;
    }

    return `<div class="unit-price">${price}${currency}</div>`;
  }
}

customElements.define('table-row-unit-price', TableRowUnitPrice);
