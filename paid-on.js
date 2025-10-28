//TODO Implementar estilos.

export class PaidOn extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['amount', 'date-value', 'date-format'];
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
    const amount = this.getAttribute('amount') ?? '0.00$';
    const dateValue = this.getAttribute('date-value') ?? new Date();
    const dateFormat = this.getAttribute('date-format') ?? 'MMMM D, YYYY';

    const formatedDate = dayjs(dateValue).format(dateFormat);

    this.shadowRoot.innerHTML = `
      <style>
      </style>
      <p>${amount} Paid on ${formatedDate}</p>
    `;
  }
}

customElements.define('paid-on', PaidOn);
