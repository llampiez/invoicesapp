import { StyledComponent } from '../base-components/styled-component.js';

export class TableHeadTax extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') || 'Tax';

    this.shadowRoot.innerHTML = `
      <style>
        .th-tax {
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
      <div class="th-tax">${label}</div>
    `;
  }
}

customElements.define('th-tax', TableHeadTax);
