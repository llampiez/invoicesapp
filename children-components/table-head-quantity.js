import { TableCell } from '../base-components/table-cell.js';

export class TableHeadQuantity extends TableCell {
  static getContentAttributes() {
    return [];
  }

  renderContent() {
    return `<div class="header">Quantity</div>`;
  }
}

customElements.define('table-head-quantity', TableHeadQuantity);
