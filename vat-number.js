//TODO Add styles personalization.

export class VATNumber extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
  }

  static get observedAttributes() {
    return ['name', 'vat-number'];
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
    const name = this.getAttribute('name') ?? 'VAT Number:';
    const vatNumber = this.getAttribute('vat-number') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
      </style>
      <span>${name} ${vatNumber}</span>
    `;
  }
}

customElements.define('vat-number', VATNumber);
