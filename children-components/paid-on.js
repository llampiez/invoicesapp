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
    return ['mode', 'amount', 'date-value', 'date-format', 'color', 'font-size', 'font-weight', 'font-family', 'text-align', 'margin', 'padding'];
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

    const color = this.getAttribute('color') ?? '#000000';
    const fontSize = this.getAttribute('font-size') ?? '16px';
    const fontWeight = this.getAttribute('font-weight') ?? 'normal';
    const fontFamily = this.getAttribute('font-family') ?? 'inherit';
    const textAlign = this.getAttribute('text-align') ?? 'left';
    const margin = this.getAttribute('margin') ?? '0';
    const padding = this.getAttribute('padding') ?? '0';

    const formatedDate = dayjs(dateValue).format(dateFormat);

    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: ${color};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          font-family: ${fontFamily};
          text-align: ${textAlign};
          margin: ${margin};
          padding: ${padding};
        }
      </style>
      <p>${amount} Paid on ${formatedDate}</p>
    `;
  }
}

customElements.define('paid-on', PaidOn);
