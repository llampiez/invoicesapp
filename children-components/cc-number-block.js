import { StyledComponent } from '../base-components/styled-component';

export class CCNumberBlock extends StyledComponent {
  static getCustomAttributes() {
    return ['value'];
  }

  render() {
    const value = this.getAttribute('value') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: ${this.display};
          flex-direction: ${this.flexDirection};
          gap: ${this.gap};
          align-items: ${this.alignItems};
          justify-content: ${this.justifyContent};
          background-color: ${this.backgroundColor};
          padding: ${this.padding};
          margin: ${this.margin};
          border: ${this.borderWidth} solid ${this.borderColor};
          border-radius: ${this.borderRadius};
          width: ${this.width};
          height: ${this.height};
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
        }
      </style>
      <div class="container">
        <div>Credit Card Number:</div>
        <div>${value}</div>
      </div>
    `;
  }
}

customElements.define('cc-number-block', CCNumberBlock);
