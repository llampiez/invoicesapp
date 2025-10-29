import { TableCell } from '../base-components/table-cell.js';

export class TableHeadUnitPrice extends TableCell {
  static getContentAttributes() {
    return [];
  }

  renderContent() {
    return `<div class="header">Unit price</div>`;
  }
}

customElements.define('table-head-unit-price', TableHeadUnitPrice);
