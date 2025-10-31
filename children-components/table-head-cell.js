import { StyledComponent } from '../base-components/styled-component.js';

export class TableHeadCell extends StyledComponent {
  static getCustomAttributes() {
    return ['content'];
  }

  render() {
    const content = this.getAttribute('content') || '';

    this.shadowRoot.innerHTML = `
      <style>
        div {
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
      <div>${content}</div>
    `;
  }
}

customElements.define('th-cell', TableHeadCell);
