import { StyledComponent } from '../base-components/styled-component.js';

export class TableHeadAmount extends StyledComponent {
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .header {
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
      <div class="header">Amount</div>
    `;
  }
}

customElements.define('table-head-amount', TableHeadAmount);
