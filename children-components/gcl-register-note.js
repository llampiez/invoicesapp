import { StyledComponent } from '../base-components/styled-component.js';

export class GCLRegisterNote extends StyledComponent {
  static getCustomAttributes() {
    return ['number'];
  }

  render() {
    const number = this.getAttribute('number') ?? '';

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
      <p>GCL Commercial register number: ${number}</p>
    `;
  }
}

customElements.define('gcl-register-note', GCLRegisterNote);
