export class InvoiceTr extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview'; // Estado por defecto: preview o edit
  }

  // Definir los atributos que queremos observar
  static get observedAttributes() {
    return [
      'col-widths',
      'background-color',
      'color',
      'font-size',
      'font-weight',
      'font-family',
      'text-align',
      'vertical-align',
      'padding',
      'margin',
      'border',
      'border-radius',
      'border-color',
      'border-width',
      'border-style',
      'height',
      'min-height',
      'max-height',
      'box-shadow',
      'gap',
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
        // mode no afecta el render visual, solo actualiza el estado interno
        return;
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
    // Estilos generales de la fila
    const backgroundColor =
      this.getAttribute('background-color') || 'transparent';
    const color = this.getAttribute('color') || 'inherit';
    const fontSize = this.getAttribute('font-size') || 'inherit';
    const fontWeight = this.getAttribute('font-weight') || 'inherit';
    const fontFamily = this.getAttribute('font-family') || 'inherit';
    const textAlign = this.getAttribute('text-align') || 'inherit';
    const verticalAlign = this.getAttribute('vertical-align') || 'inherit';
    const padding = this.getAttribute('padding') || '0';
    const margin = this.getAttribute('margin') || '0';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';
    const borderColor = this.getAttribute('border-color') || 'currentColor';
    const borderWidth = this.getAttribute('border-width') || 'medium';
    const borderStyle = this.getAttribute('border-style') || 'none';
    const height = this.getAttribute('height') || 'auto';
    const minHeight = this.getAttribute('min-height') || 'auto';
    const maxHeight = this.getAttribute('max-height') || 'none';
    const boxShadow = this.getAttribute('box-shadow') || 'none';
    const gap = this.getAttribute('gap') || '0';
    const alignItems = this.getAttribute('align-items') || 'normal';
    const gridTemplateColumns = this.getAttribute('col-widths') || 'subgrid';

    // Siempre usar slot para recibir hijos
    this.shadowRoot.innerHTML = `
      <style>
        .row-container {
          display: grid;
          grid-column: 1 / -1;
          grid-template-columns: ${gridTemplateColumns};
          gap: ${gap};
          background-color: ${backgroundColor};
          color: ${color};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          font-family: ${fontFamily};
          text-align: ${textAlign};
          vertical-align: ${verticalAlign};
          padding: ${padding};
          margin: ${margin};
          border: ${border};
          border-radius: ${borderRadius};
          border-color: ${borderColor};
          border-width: ${borderWidth};
          border-style: ${borderStyle};
          height: ${height};
          min-height: ${minHeight};
          max-height: ${maxHeight};
          box-shadow: ${boxShadow};
          align-items: ${alignItems}
        }
      </style>
      <div class="row-container"><slot></slot></div>
    `;
  }
}

// Registrar el web component
customElements.define('invoice-tr', InvoiceTr);
