import { TableCell } from '../base-components/table-cell.js';

export class TableHeadAmount extends TableCell {
  static getContentAttributes() {
    return [];
  }

  renderContent() {
    return `<div class="header">Amount</div>`;
  }
}

customElements.define('table-head-amount', TableHeadAmount);
