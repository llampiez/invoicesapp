export class InvoiceNumber extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
  }

  static get observedAttributes() {
    return [
      'number',
      'label',
      'mode',
      'font-size',
      'font-weight',
      'font-family',
      'justify-content',
      'padding',
      'margin',
      'background',
      'border',
      'border-radius',
      'gap',
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'mode') {
        this._mode = newValue || 'preview';
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
    const number = this.getAttribute('number') ?? 'Invoice number not provided';
    const label = this.getAttribute('label') ?? 'Invoice number';

    const fontSize = this.getAttribute('font-size') || '16px';
    const fontWeight = this.getAttribute('font-weight') || 'normal';
    const fontFamily = this.getAttribute('font-family') || 'inherit';
    const justifyContent = this.getAttribute('justify-content') || 'flex-start';
    const padding = this.getAttribute('padding') || '0';
    const margin = this.getAttribute('margin') || '0';
    const background = this.getAttribute('background') || 'transparent';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';
    const gap = this.getAttribute('gap') || '0px';

    this.shadowRoot.innerHTML = `
      <style>
        .invoice-number-container {
          display: flex;
          justify-content: ${justifyContent};
          gap: ${gap};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          font-family: ${fontFamily};
          padding: ${padding};
          margin: ${margin};
          background: ${background};
          border: ${border};
          border-radius: ${borderRadius};
        }
      </style>
      <div class="invoice-number-container">
        <span>${label}</span>
        <span>${number}</span>
      </div>
    `;
  }
}

customElements.define('invoice-number', InvoiceNumber);
