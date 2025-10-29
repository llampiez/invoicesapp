import { StyledComponent } from '../base-components/styled-component.js';

export class TaxNote extends StyledComponent {
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: ${this.display};
          width: ${this.width};
          max-width: ${this.maxWidth};
        }

        .tax-note {
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          font-style: ${this.fontStyle};
          color: ${this.color};
          background: ${this.background};
          padding: ${this.padding};
          margin: ${this.margin};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          text-align: ${this.textAlign};
          line-height: ${this.lineHeight};
          letter-spacing: ${this.letterSpacing};
          text-transform: ${this.textTransform};
          text-decoration: ${this.textDecoration};
          box-shadow: ${this.boxShadow};
          opacity: ${this.opacity};
        }
      </style>
      <p class="tax-note">$Tax to be paid on reverse charge basis.</p>
    `;
  }
}

customElements.define('tax-note', TaxNote);
