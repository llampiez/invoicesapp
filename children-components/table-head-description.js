import { TableCell } from '../base-components/table-cell.js';

export class TableHeadDescription extends TableCell {
  static getContentAttributes() {
    return [];
  }

  renderContent() {
    return `<div class="header">Description</div>`;
  }
}

customElements.define('table-head-description', TableHeadDescription);
