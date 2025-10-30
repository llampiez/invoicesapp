import { StyledComponent } from '../base-components/styled-component.js';

export class PolicyFAQNote extends StyledComponent {
  static getCustomAttributes() {
    return ['value', 'url-path'];
  }

  render() {
    const value =
      this.getAttribute('value') ??
      'For information on our refund policy and other purchasing FAQs, see';
    const urlPath = this.getAttribute('url-path') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
        span {
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
        }
      </style>
      <span>${value} ${urlPath}</span>
    `;
  }
}

customElements.define('policy-faq-note', PolicyFAQNote);
