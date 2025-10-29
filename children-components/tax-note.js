export class TaxNote extends HTMLElement {
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
      'font-size',
      'font-weight',
      'font-family',
      'color',
      'background',
      'padding',
      'margin',
      'border',
      'border-radius',
      'text-align',
      'line-height',
      'letter-spacing',
      'text-transform',
      'font-style',
      'text-decoration',
      'display',
      'width',
      'max-width',
      'box-shadow',
      'opacity',
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
    const fontSize = this.getAttribute('font-size') || '0.9rem';
    const fontWeight = this.getAttribute('font-weight') || '400';
    const fontFamily = this.getAttribute('font-family') || 'inherit';
    const color = this.getAttribute('color') || '#666';
    const background = this.getAttribute('background') || 'transparent';
    const padding = this.getAttribute('padding') || '0.5rem 0';
    const margin = this.getAttribute('margin') || '0';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';
    const textAlign = this.getAttribute('text-align') || 'left';
    const lineHeight = this.getAttribute('line-height') || '1.5';
    const letterSpacing = this.getAttribute('letter-spacing') || 'normal';
    const textTransform = this.getAttribute('text-transform') || 'none';
    const fontStyle = this.getAttribute('font-style') || 'normal';
    const textDecoration = this.getAttribute('text-decoration') || 'none';
    const display = this.getAttribute('display') || 'block';
    const width = this.getAttribute('width') || 'auto';
    const maxWidth = this.getAttribute('max-width') || 'none';
    const boxShadow = this.getAttribute('box-shadow') || 'none';
    const opacity = this.getAttribute('opacity') || '1';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: ${display};
          width: ${width};
          max-width: ${maxWidth};
        }

        .tax-note {
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          font-family: ${fontFamily};
          color: ${color};
          background: ${background};
          padding: ${padding};
          margin: ${margin};
          border: ${border};
          border-radius: ${borderRadius};
          text-align: ${textAlign};
          line-height: ${lineHeight};
          letter-spacing: ${letterSpacing};
          text-transform: ${textTransform};
          font-style: ${fontStyle};
          text-decoration: ${textDecoration};
          box-shadow: ${boxShadow};
          opacity: ${opacity};
        }
      </style>
      <p class="tax-note">$Tax to be paid on reverse charge basis.</p>
    `;
  }
}

customElements.define('tax-note', TaxNote);
