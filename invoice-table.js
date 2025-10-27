export class InvoiceTable extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview'; // Estado por defecto: preview o edit
  }

  // Definir los atributos que queremos observar
  static get observedAttributes() {
    return [
      'width',
      'height',
      'min-width',
      'max-width',
      'min-height',
      'max-height',
      'margin',
      'padding',
      'background-color',
      'border',
      'border-radius',
      'border-color',
      'border-width',
      'border-style',
      'border-collapse',
      'border-spacing',
      'box-shadow',
      'font-family',
      'font-size',
      'color',
      'mode',
      'grid-rows',
      'grid-cols',
      'gap',
      'row-gap',
      'column-gap',
      'grid-auto-flow',
      'align-items',
      'justify-items',
      'align-content',
      'justify-content',
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
    const width = this.getAttribute('width') || 'auto';
    const height = this.getAttribute('height') || 'auto';
    const minWidth = this.getAttribute('min-width') || 'auto';
    const maxWidth = this.getAttribute('max-width') || 'none';
    const minHeight = this.getAttribute('min-height') || 'auto';
    const maxHeight = this.getAttribute('max-height') || 'none';
    const margin = this.getAttribute('margin') || '0';
    const padding = this.getAttribute('padding') || '0';
    const backgroundColor = this.getAttribute('background-color') || 'transparent';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';
    const borderColor = this.getAttribute('border-color') || 'currentColor';
    const borderWidth = this.getAttribute('border-width') || 'medium';
    const borderStyle = this.getAttribute('border-style') || 'none';
    const borderCollapse = this.getAttribute('border-collapse') || 'collapse';
    const borderSpacing = this.getAttribute('border-spacing') || '0';
    const boxShadow = this.getAttribute('box-shadow') || 'none';
    const fontFamily = this.getAttribute('font-family') || 'inherit';
    const fontSize = this.getAttribute('font-size') || 'inherit';
    const color = this.getAttribute('color') || 'inherit';

    // Nuevos atributos para CSS Grid
    const gridRows = this.getAttribute('grid-rows') || '3';
    const gridCols = this.getAttribute('grid-cols') || '1';
    const gap = this.getAttribute('gap') || '';
    const rowGap = this.getAttribute('row-gap') || '';
    const columnGap = this.getAttribute('column-gap') || '';
    const gridAutoFlow = this.getAttribute('grid-auto-flow') || 'row';
    const alignItems = this.getAttribute('align-items') || 'stretch';
    const justifyItems = this.getAttribute('justify-items') || 'stretch';
    const alignContent = this.getAttribute('align-content') || 'stretch';
    const justifyContent = this.getAttribute('justify-content') || 'stretch';

    // Crear el template de filas y columnas (por defecto: 3 filas x 1 columna)
    const gridTemplateRows = `repeat(${gridRows}, auto)`;
    const gridTemplateColumns = `repeat(${gridCols}, 1fr)`;

    // Determinar qué propiedad de gap usar
    let gapStyle = '';
    if (gap) {
      gapStyle = `gap: ${gap};`;
    } else {
      if (rowGap) gapStyle += `row-gap: ${rowGap};`;
      if (columnGap) gapStyle += `column-gap: ${columnGap};`;
    }

    this.shadowRoot.innerHTML = `
      <style>
        div {
          display: grid;
          grid-template-rows: ${gridTemplateRows};
          grid-template-columns: ${gridTemplateColumns};
          grid-auto-flow: ${gridAutoFlow};
          ${gapStyle}
          align-items: ${alignItems};
          justify-items: ${justifyItems};
          align-content: ${alignContent};
          justify-content: ${justifyContent};
          width: ${width};
          height: ${height};
          min-width: ${minWidth};
          max-width: ${maxWidth};
          min-height: ${minHeight};
          max-height: ${maxHeight};
          margin: ${margin};
          padding: ${padding};
          background-color: ${backgroundColor};
          border: ${border};
          border-radius: ${borderRadius};
          border-color: ${borderColor};
          border-width: ${borderWidth};
          border-style: ${borderStyle};
          box-shadow: ${boxShadow};
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${color};
        }
      </style>
      <div><slot></slot></div>
    `;

    // Por los momentos, los estados preview/edit no cambian nada visualmente
    // pero están disponibles para uso futuro
  }
}

// Registrar el web component
customElements.define('invoice-table', InvoiceTable);
