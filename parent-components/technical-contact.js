import { StyledComponent } from '../base-components/styled-component.js';

export class TechnicalContact extends StyledComponent {
  static getCustomAttributes() {
    return [
      'label-font-size',
      'label-font-weight',
      'label-color',
      'label-margin-bottom',
      'slot-margin',
      'slot-padding',
      'slot-font-size',
      'slot-font-weight',
      'slot-color',
      'slot-text-align',
      'slot-line-height',
    ];
  }

  render() {
    const labelFontSize = this.getAttribute('label-font-size') ?? '1rem';
    const labelFontWeight = this.getAttribute('label-font-weight') ?? 'normal';
    const labelColor = this.getAttribute('label-color') ?? 'black';
    const labelMarginBottom = this.getAttribute('label-margin-bottom') ?? '0';

    const slotMargin = this.getAttribute('slot-margin') ?? '0';
    const slotPadding = this.getAttribute('slot-padding') ?? '0';
    const slotFontSize = this.getAttribute('slot-font-size') ?? 'inherit';
    const slotFontWeight = this.getAttribute('slot-font-weight') ?? 'inherit';
    const slotColor = this.getAttribute('slot-color') ?? 'inherit';
    const slotTextAlign = this.getAttribute('slot-text-align') ?? 'inherit';
    const slotLineHeight = this.getAttribute('slot-line-height') ?? 'inherit';

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          padding: ${this.padding};
          margin: ${this.margin};
          text-align: ${this.textAlign};
          line-height: ${this.lineHeight};
        }
        .label {
          font-size: ${labelFontSize};
          font-weight: ${labelFontWeight};
          color: ${labelColor};
          margin-bottom: ${labelMarginBottom};
        }
        .slot-container {
          margin: ${slotMargin};
          padding: ${slotPadding};
          font-size: ${slotFontSize};
          font-weight: ${slotFontWeight};
          color: ${slotColor};
          text-align: ${slotTextAlign};
          line-height: ${slotLineHeight};
        }
      </style>
      <div class="container">
        <div class="label">Technical Contact:</div>
        <div class="slot-container">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('technical-contact', TechnicalContact);
