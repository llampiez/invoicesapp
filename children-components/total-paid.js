export class TotalPaid extends HTMLElement {
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
      'amount',
      'font-family',
      'font-size',
      'font-weight',
      'label-color',
      'amount-color',
      'background-color',
      'border-color',
      'border-width',
      'border-radius',
      'padding',
      'margin',
      'justify-content',
      'label-font-size',
      'label-font-weight',
      'amount-font-size',
      'amount-font-weight',
      'gap',
      'direction',
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
    const amount = this.getAttribute('amount') ?? '';

    const fontFamily = this.getAttribute('font-family') ?? 'inherit';
    const fontSize = this.getAttribute('font-size') ?? '16px';
    const fontWeight = this.getAttribute('font-weight') ?? 'normal';

    const labelColor = this.getAttribute('label-color') ?? 'black';
    const labelFontSize = this.getAttribute('label-font-size') ?? fontSize;
    const labelFontWeight =
      this.getAttribute('label-font-weight') ?? fontWeight;

    const amountColor = this.getAttribute('amount-color') ?? 'black';
    const amountFontSize = this.getAttribute('amount-font-size') ?? fontSize;
    const amountFontWeight =
      this.getAttribute('amount-font-weight') ?? 'normal';

    const backgroundColor =
      this.getAttribute('background-color') ?? 'transparent';
    const borderColor = this.getAttribute('border-color') ?? 'transparent';
    const borderWidth = this.getAttribute('border-width') ?? '0';
    const borderRadius = this.getAttribute('border-radius') ?? '0';
    const padding = this.getAttribute('padding') ?? '0px';
    const margin = this.getAttribute('margin') ?? '0';
    const justifyContent =
      this.getAttribute('justify-content') ?? 'space-between';
    const gap = this.getAttribute('gap') ?? '0px';
    const direction = this.getAttribute('direction') ?? 'row';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: ${fontFamily};
          margin: ${margin};
        }

        .container {
          display: flex;
          flex-direction: ${direction};
          gap: ${gap};
          align-items: ${direction === 'row' ? 'center' : 'flex-start'};
          justify-content: ${justifyContent};
          background-color: ${backgroundColor};
          border: ${borderWidth} solid ${borderColor};
          border-radius: ${borderRadius};
          padding: ${padding};
        }

        .label {
          color: ${labelColor};
          font-size: ${labelFontSize};
          font-weight: ${labelFontWeight};
          margin: 0;
        }

        .amount {
          color: ${amountColor};
          font-size: ${amountFontSize};
          font-weight: ${amountFontWeight};
          margin: 0;
        }
      </style>
      <div class="container">
        <span class="label">Total</span>
        <span class="amount">${amount}</span>
      </div>
    `;
  }
}

customElements.define('total-paid', TotalPaid);
