import { StyledComponent } from '../base-components/styled-component.js';

export class PaginationInline extends StyledComponent {
  static getCustomAttributes() {
    return ['current-page', 'total-pages'];
  }

  render() {
    const currentPage = this.getAttribute('current-page') || '0';
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
      <span>${currentPage} of ${totalPages}</span>
    `;
  }
}

customElements.define('pagination-inline', PaginationInline);
