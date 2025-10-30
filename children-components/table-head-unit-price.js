import { StyledComponent } from '../base-components/styled-component.js';

export class TableHeadUnitPrice extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') || 'Unit price';

    this.shadowRoot.innerHTML = `
      <style>
        .th-unit-price {
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
      <div class="th-unit-price">${label}</div>
    `;
  }
}

customElements.define('th-unit-price', TableHeadUnitPrice);
