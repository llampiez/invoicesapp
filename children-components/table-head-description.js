import { StyledComponent } from '../base-components/styled-component.js';

export class TableHeadDescription extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') || 'Description';

    this.shadowRoot.innerHTML = `
      <style>
        .th-description {
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
      <div class="th-description">${label}</div>
    `;
  }
}

customElements.define('th-description', TableHeadDescription);
