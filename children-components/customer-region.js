export class CustomerRegion extends HTMLElement {
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
      'region',
      'font-size',
      'font-weight',
      'font-family',
      'padding',
      'margin',
      'background',
      'border',
      'border-radius',
      'color',
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
    const region = this.getAttribute('region') || 'Customer Region';

    const fontSize = this.getAttribute('font-size') || '16px';
    const fontWeight = this.getAttribute('font-weight') || 'normal';
    const fontFamily = this.getAttribute('font-family') || 'inherit';
    const padding = this.getAttribute('padding') || '0';
    const margin = this.getAttribute('margin') || '0';
    const background = this.getAttribute('background') || 'transparent';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';
    const color = this.getAttribute('color') || 'inherit';

    this.shadowRoot.innerHTML = `
      <style>
        span {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          font-family: ${fontFamily};
          padding: ${padding};
          margin: ${margin};
          background: ${background};
          border: ${border};
          border-radius: ${borderRadius};
          color: ${color};
        }
      </style>
      <span>${region}</span>
    `;
  }
}

customElements.define('customer-region', CustomerRegion);
