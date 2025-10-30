import { StyledComponent } from '../base-components/styled-component.js';

export class ContactUsNote extends StyledComponent {
  static getCustomAttributes() {
    return ['label', 'url-path'];
  }

  render() {
    const label = this.getAttribute('label') ?? 'Got questions? Contact us.';
    const urlPath = this.getAttribute('url-path') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
          margin: ${this.margin};
          padding: ${this.padding};
        }
      </style>
      <div class="container">
        <div>${label}</div>
        <div>${urlPath}</div>
      </div>
    `;
  }
}

customElements.define('contact-us-note', ContactUsNote);
