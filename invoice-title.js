export class InvoiceTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
  }

  static get observedAttributes() {
    return ['title', 'mode'];
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

    this.shadowRoot.innerHTML = `
      <style>
        h1 {
        }
      </style>
      <h1>${title}</h1>
    `;
  }
}

customElements.define('invoice-title', InvoiceTitle);
