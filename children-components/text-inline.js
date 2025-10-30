import { StyledComponent } from '../base-components/styled-component.js';

export class TextInline extends StyledComponent {
  static getCustomAttributes() {
    return ['text'];
  }

  render() {
    const text = this.getAttribute('text') ?? '';

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
      <span>${text}</span>
    `;
  }
}

customElements.define('text-inline', TextInline);
