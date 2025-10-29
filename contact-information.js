export class ContactInformation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
  }

  static get observedAttributes() {
    return [
      'title',
      'title-font-weight',
      'title-font-size',
      'title-color',
      'title-margin-bottom',
      'content-font-size',
      'content-color',
      'content-line-height',
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
    const title = this.getAttribute('title') || 'Bill To:';

    const titleFontWeight = this.getAttribute('title-font-weight') || 'normal';
    const titleFontSize = this.getAttribute('title-font-size') || '1em';
    const titleColor = this.getAttribute('title-color') || 'inherit';
    const titleMarginBottom = this.getAttribute('title-margin-bottom') || '0px';

    const contentFontSize = this.getAttribute('content-font-size') || '1em';
    const contentColor = this.getAttribute('content-color') || 'inherit';
    const contentLineHeight = this.getAttribute('content-line-height') || '1.6';

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
        ul {
          list-style-type: none;
          margin: 0px;
          padding: 0px
        }
        .bill-to-container {
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
        .bill-to-title {
          font-weight: ${titleFontWeight};
          font-size: ${titleFontSize};
          color: ${titleColor};
          margin-bottom: ${titleMarginBottom};
        }
        .bill-to-content {
          display: flex;
          flex-direction: column;
          font-size: ${contentFontSize};
          color: ${contentColor};
          line-height: ${contentLineHeight};
        }
      </style>
      <div class="bill-to-container">
        <div class="bill-to-title">${title}</div>
        <ul class="bill-to-content">
          <slot></slot>
        </ul>
      </div>
    `;
  }
}

customElements.define('contact-information', ContactInformation);
