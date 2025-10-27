export class InvoiceTd extends HTMLElement {
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
      'border-color',
      'border-width',
      'border-style',
      'text-shadow',
      'box-shadow',
      'line-height',
      'width',
      'height',
      'min-width',
      'max-width',
      'min-height',
      'max-height',
      'vertical-align',
      'white-space',
      'text-decoration',
      'font-style',
      'mode',
      'colspan',
      'col-start',
      'col-end',
      'grid-column',
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
    // Estilos visuales
    const color = this.getAttribute('color') || 'inherit';
    const fontSize = this.getAttribute('font-size') || 'inherit';
    const fontWeight = this.getAttribute('font-weight') || 'normal';
    const textAlign = this.getAttribute('text-align') || 'left';
    const fontFamily = this.getAttribute('font-family') || 'inherit';
    const letterSpacing = this.getAttribute('letter-spacing') || 'normal';
    const textTransform = this.getAttribute('text-transform') || 'none';
    const margin = this.getAttribute('margin') || '0';
    const padding = this.getAttribute('padding') || '8px';
    const backgroundColor =
      this.getAttribute('background-color') || 'transparent';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';
    const borderColor = this.getAttribute('border-color') || 'currentColor';
    const borderWidth = this.getAttribute('border-width') || 'medium';
    const borderStyle = this.getAttribute('border-style') || 'none';
    const textShadow = this.getAttribute('text-shadow') || 'none';
    const boxShadow = this.getAttribute('box-shadow') || 'none';
    const lineHeight = this.getAttribute('line-height') || 'normal';
    const width = this.getAttribute('width') || 'auto';
    const height = this.getAttribute('height') || 'auto';
    const minWidth = this.getAttribute('min-width') || 'auto';
    const maxWidth = this.getAttribute('max-width') || 'none';
    const minHeight = this.getAttribute('min-height') || 'auto';
    const maxHeight = this.getAttribute('max-height') || 'none';
    const verticalAlign = this.getAttribute('vertical-align') || 'middle';
    const whiteSpace = this.getAttribute('white-space') || 'normal';
    const textDecoration = this.getAttribute('text-decoration') || 'none';
    const fontStyle = this.getAttribute('font-style') || 'normal';

    this.shadowRoot.innerHTML = `
      <style>
        div {
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
          border-color: ${borderColor};
          border-width: ${borderWidth};
          border-style: ${borderStyle};
          text-shadow: ${textShadow};
          box-shadow: ${boxShadow};
          line-height: ${lineHeight};
          width: ${width};
          height: ${height};
          min-width: ${minWidth};
          max-width: ${maxWidth};
          min-height: ${minHeight};
          max-height: ${maxHeight};
          vertical-align: ${verticalAlign};
          white-space: ${whiteSpace};
          text-decoration: ${textDecoration};
          font-style: ${fontStyle};
        }
      </style>
      <div><slot></slot></div>
    `;

    // Por los momentos, los estados preview/edit no cambian nada visualmente
    // pero están disponibles para uso futuro
  }
}

// Registrar el web component
customElements.define('invoice-td', InvoiceTd);
