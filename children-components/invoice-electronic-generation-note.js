import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceElectronicGenerationNote extends StyledComponent {
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
      <p>This invoice was generated electronically and automatically, without a cash register.</p>
    `;
  }
}

customElements.define(
  'invoice-electronic-generation-note',
  InvoiceElectronicGenerationNote,
);
