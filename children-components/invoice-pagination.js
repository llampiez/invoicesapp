import { StyledComponent } from '../base-components/styled-component.js';

export class InvoicePagination extends StyledComponent {
  static getCustomAttributes() {
    return ['page', 'total-pages'];
  }

  render() {
    const page = this.getAttribute('page') || '0';
    const totalPages = this.getAttribute('total-pages') || '0';

    this.shadowRoot.innerHTML = `
      <style>
        span {
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          padding: ${this.padding};
          margin: ${this.margin};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          color: ${this.color};
        }
      </style>
      <span>${page} of ${totalPages}</span>
    `;
  }
}

customElements.define('invoice-pagination', InvoicePagination);
