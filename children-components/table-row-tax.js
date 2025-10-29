import { TableCell } from '../base-components/table-cell.js';

export class TableRowTax extends TableCell {
  static getContentAttributes() {
    return ['tax'];
  }

  renderContent() {
    const tax = this.getAttribute('tax') ?? '0';

    return `<div class="tax">${tax}%</div>`;
  }
}

customElements.define('table-row-tax', TableRowTax);
