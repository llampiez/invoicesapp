import { StyledComponent } from '../base-components/styled-component.js';

export class Summary extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Summary';

    this.shadowRoot.innerHTML = `
      <style>
        .summary {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
        }
      </style>
      <span class="summary">${label}</span>
    `;
  }
}

customElements.define('summary', Summary);
