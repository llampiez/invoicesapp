import { StyledComponent } from '../base-components/styled-component.js';

export class BillToRegion extends StyledComponent {
  static getCustomAttributes() {
    return ['region'];
  }

  render() {
    const region = this.getAttribute('region') || 'Bill To Region';

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
      <span>${region}</span>
    `;
  }
}

customElements.define('bill-to-region', BillToRegion);