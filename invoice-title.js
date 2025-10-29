export class InvoiceTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
  }

  static get observedAttributes() {
    return [
      'title',
      'mode',
      'font-size',
      'font-weight',
      'color',
      'text-align',
      'margin',
      'padding',
      'font-family',
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
    const title = this.getAttribute('title') ?? 'Invoice';

    const fontSize = this.getAttribute('font-size') ?? '1rem';
    const fontWeight = this.getAttribute('font-weight') ?? 'normal';
    const color = this.getAttribute('color') ?? 'black';
    const textAlign = this.getAttribute('text-align') ?? 'left';
    const margin = this.getAttribute('margin') ?? '0px';
    const padding = this.getAttribute('padding') ?? '0px';
    const fontFamily = this.getAttribute('font-family') ?? 'inherit';

    this.shadowRoot.innerHTML = `
      <style>
        h1 {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          color: ${color};
          text-align: ${textAlign};
          margin: ${margin};
          padding: ${padding};
          font-family: ${fontFamily};
        }
      </style>
      <h1>${title}</h1>
    `;
  }
}

customElements.define('invoice-title', InvoiceTitle);
