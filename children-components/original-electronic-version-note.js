import { StyledComponent } from '../base-components/styled-component.js';

export class OriginalElectronicVersionNote extends StyledComponent {
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
        }
      </style>
      <p>This is the original electronic version.</p>
    `;
  }
}

customElements.define(
  'original-electronic-version-note',
  OriginalElectronicVersionNote,
);
