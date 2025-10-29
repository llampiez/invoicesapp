import { StyledComponent } from '../base-components/styled-component.js';

export class TableHeadDescription extends StyledComponent {
  render() {
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
      <div class="th-description">Description</div>
    `;
  }
}

customElements.define('th-description', TableHeadDescription);
