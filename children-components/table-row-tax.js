import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowTax extends StyledComponent {
  static getCustomAttributes() {
    return ['tax'];
  }

  render() {
    const tax = this.getAttribute('tax') ?? '0';

    this.shadowRoot.innerHTML = `
      <style>
        .tax {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          padding: ${this.padding};
          margin: ${this.margin};
          text-align: ${this.textAlign};
          line-height: ${this.lineHeight};
        }
      </style>
      <div class="tax">${tax}%</div>
    `;
  }
}

customElements.define('table-row-tax', TableRowTax);
