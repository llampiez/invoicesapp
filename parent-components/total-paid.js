import { StyledComponent } from '../base-components/styled-component.js';

export class TotalPaid extends StyledComponent {
  static getCustomAttributes() {
    return [];
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: ${this.display};
          font-family: ${this.fontFamily};
          margin: ${this.margin};
        }

        .container {
          display: flex;
          flex-direction: ${this.flexDirection};
          gap: ${this.gap};
          align-items: ${this.alignItems};
          justify-content: ${this.justifyContent};
          background-color: ${this.backgroundColor};
          border: ${this.borderWidth} solid ${this.borderColor};
          border-radius: ${this.borderRadius};
          padding: ${this.padding};
          width: ${this.width};
          height: ${this.height};
        }

        ::slotted(*) {
          margin: 0;
        }
      </style>
      <div class="container">
        <slot name="total-paid-label"></slot>
        <slot name="total-paid-value"></slot>
      </div>
    `;
  }
}

customElements.define('total-paid', TotalPaid);
