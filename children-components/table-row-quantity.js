import { TableCell } from '../base-components/table-cell.js';

export class TableRowQuantity extends TableCell {
  static getContentAttributes() {
    return ['quantity'];
  }

  renderContent() {
    const quantity = this.getAttribute('quantity') ?? '';
    return `<div class="quantity">${quantity}</div>`;
  }
}

customElements.define('table-row-quantity', TableRowQuantity);
