import { TableCell } from '../base-components/table-cell.js';

export class TableHeadTax extends TableCell {
  static getContentAttributes() {
    return [];
  }

  renderContent() {
    return `<div class="header">Tax</div>`;
  }
}

customElements.define('table-head-tax', TableHeadTax);
