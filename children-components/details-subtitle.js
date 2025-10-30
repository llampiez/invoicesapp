import { StyledComponent } from '../base-components/styled-component.js';

export class DetailsSubtitle extends StyledComponent {
  static getCustomAttributes() {
    return ['label'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Details';

    this.shadowRoot.innerHTML = `
      <style>
        h2 {
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
          font-family: ${this.fontFamily};
        }
      </style>
      <h2>${label}</h2>
    `;
  }
}

customElements.define('details-subtitle', DetailsSubtitle);
