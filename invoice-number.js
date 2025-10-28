//TODO Add styles personalization.

export class InvoiceNumber extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
  }

  static get observedAttributes() {
    return ['number', 'mode'];
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
    const number = this.getAttribute('number') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
      </style>
      <p>
        <span>Invoice Number</span>
        <span>${number}</span>
      </p>
    `;
  }
}

customElements.define('invoice-number', InvoiceNumber);
