import { BaseRowCell } from './base-row-cell.js';

export class RowQuantity extends BaseRowCell {
  static getContentAttributes() {
    return ['quantity'];
  }

  renderContent() {
    const quantity = this.getAttribute('quantity') ?? '';
    return `<div class="quantity">${quantity}</div>`;
  }
}

customElements.define('row-quantity', RowQuantity);
