export class InvoiceTitle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview'; // Estado por defecto: preview o edit
  }

  // Definir los atributos que queremos observar
  static get observedAttributes() {
    return [
      'color',
      'font-size',
      'font-weight',
      'text-align',
      'font-family',
      'letter-spacing',
      'text-transform',
      'margin',
      'padding',
      'background-color',
      'border',
      'border-radius',
      'text-shadow',
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

  // Getters para los estados
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
    const color = this.getAttribute('color') || 'black';
    const fontSize = this.getAttribute('font-size') || '2em';
    const fontWeight = this.getAttribute('font-weight') || 'bold';
    const textAlign = this.getAttribute('text-align') || 'left';
    const fontFamily = this.getAttribute('font-family') || 'inherit';
    const letterSpacing = this.getAttribute('letter-spacing') || 'normal';
    const textTransform = this.getAttribute('text-transform') || 'none';
    const margin = this.getAttribute('margin') || '0';
    const padding = this.getAttribute('padding') || '0';
    const backgroundColor =
      this.getAttribute('background-color') || 'transparent';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';
    const textShadow = this.getAttribute('text-shadow') || 'none';
    const lineHeight = this.getAttribute('line-height') || 'normal';

    this.shadowRoot.innerHTML = `
      <style>
        h1 {
          color: ${color};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          text-align: ${textAlign};
          font-family: ${fontFamily};
          letter-spacing: ${letterSpacing};
          text-transform: ${textTransform};
          margin: ${margin};
          padding: ${padding};
          background-color: ${backgroundColor};
          border: ${border};
          border-radius: ${borderRadius};
          text-shadow: ${textShadow};
          line-height: ${lineHeight};
        }
      </style>
      <h1>Invoice</h1>
    `;

    // Por los momentos, los estados preview/edit no cambian nada visualmente
    // pero están disponibles para uso futuro
    // console.log('Current mode:', this._mode);
  }
}

// Registrar el web component
customElements.define('invoice-title', InvoiceTitle);
