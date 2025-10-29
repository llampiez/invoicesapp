export class PaymentHistory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return [
      'mode',
      'font-family',
      'font-size',
      'font-weight',
      'color',
      'background-color',
      'border-color',
      'border-width',
      'border-radius',
      'padding',
      'margin',
      'text-align',
      'text-transform',
      'letter-spacing',
      'line-height',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'mode') {
        this._mode = newValue || 'preview';
        return;
      }
      this.render();
    }
  }

  get mode() {
    return this._mode;
  }

  set mode(value) {
    if (value === 'preview' || value === 'edit') {
      this._mode = value;
      this.setAttribute('mode', value);
    }
  }

  render() {
    const fontFamily = this.getAttribute('font-family') ?? 'inherit';
    const fontSize = this.getAttribute('font-size') ?? '16px';
    const fontWeight = this.getAttribute('font-weight') ?? 'normal';
    const color = this.getAttribute('color') ?? 'black';
    const textTransform = this.getAttribute('text-transform') ?? 'none';
    const letterSpacing = this.getAttribute('letter-spacing') ?? 'normal';
    const lineHeight = this.getAttribute('line-height') ?? 'normal';

    const backgroundColor =
      this.getAttribute('background-color') ?? 'transparent';
    const borderColor = this.getAttribute('border-color') ?? 'transparent';
    const borderWidth = this.getAttribute('border-width') ?? '0';
    const borderRadius = this.getAttribute('border-radius') ?? '0';
    const padding = this.getAttribute('padding') ?? '0px';
    const margin = this.getAttribute('margin') ?? '0';
    const textAlign = this.getAttribute('text-align') ?? 'left';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .label {
          color: ${color};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          text-align: ${textAlign};
          text-transform: ${textTransform};
          letter-spacing: ${letterSpacing};
          line-height: ${lineHeight};
          margin: ${margin};
          background-color: ${backgroundColor};
          border: ${borderWidth} solid ${borderColor};
          border-radius: ${borderRadius};
          padding: ${padding};
          font-family: ${fontFamily};
        }
      </style>
      <p class="label">Payment History</p>
    `;
  }
}

customElements.define('payment-history', PaymentHistory);
