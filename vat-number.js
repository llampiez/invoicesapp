export class VATNumber extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview'; // Default state: preview or edit
  }

  // Define the attributes we want to observe
  static get observedAttributes() {
    return [
      'name',
      // general attributes
      'color',
      'font-size',
      'font-weight',
      'text-align',
      'font-family',
      'margin',
      'padding',
      'background-color',
      'border',
      'border-radius',
      'line-height',
      'mode',
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

  // Getters and setters for mode
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
    const name = this.getAttribute('name') || 'VAT Number:';

    // Container general attributes
    const color = this.getAttribute('color') || '#333';
    const fontSize = this.getAttribute('font-size') || '1em';
    const fontWeight = this.getAttribute('font-weight') || 'normal';
    const textAlign = this.getAttribute('text-align') || 'left';
    const fontFamily = this.getAttribute('font-family') || 'inherit';
    const margin = this.getAttribute('margin') || '0';
    const padding = this.getAttribute('padding') || '0px';
    const backgroundColor =
      this.getAttribute('background-color') || 'transparent';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';
    const lineHeight = this.getAttribute('line-height') || '1.6';

    this.shadowRoot.innerHTML = `
      <style>
        p {
          color: ${color};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          text-align: ${textAlign};
          font-family: ${fontFamily};
          margin: ${margin};
          padding: ${padding};
          background-color: ${backgroundColor};
          border: ${border};
          border-radius: ${borderRadius};
          line-height: ${lineHeight};
        }
      </style>
      <p>
        ${name}
        <slot></slot>
      </p>
    `;
  }
}

customElements.define('vat-number', VATNumber);
