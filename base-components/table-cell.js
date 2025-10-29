export class TableCell extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview';
  }

  static get observedAttributes() {
    return [
      'mode',
      'font-family',
      'font-size',
      'font-weight',
      'color',
      'background-color',
      'border',
      'border-radius',
      'padding',
      'margin',
      'text-align',
      'line-height',
      ...this.getContentAttributes(),
    ];
  }

  // Abstract method - must be implemented by child classes
  static getContentAttributes() {
    return [];
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

  // Get common container styles
  getContainerStyles() {
    const fontFamily = this.getAttribute('font-family') ?? 'inherit';
    const fontSize = this.getAttribute('font-size') ?? '1em';
    const fontWeight = this.getAttribute('font-weight') ?? 'normal';
    const color = this.getAttribute('color') ?? 'inherit';
    const backgroundColor =
      this.getAttribute('background-color') ?? 'transparent';
    const border = this.getAttribute('border') ?? 'none';
    const borderRadius = this.getAttribute('border-radius') ?? '0';
    const padding = this.getAttribute('padding') ?? '0';
    const margin = this.getAttribute('margin') ?? '0';
    const textAlign = this.getAttribute('text-align') ?? 'left';
    const lineHeight = this.getAttribute('line-height') ?? 'normal';

    return {
      fontFamily,
      fontSize,
      fontWeight,
      color,
      backgroundColor,
      border,
      borderRadius,
      padding,
      margin,
      textAlign,
      lineHeight,
    };
  }

  // Abstract method - should be overridden by child classes for additional styles
  getContentStyles() {
    return '';
  }

  // Abstract method - must be implemented by child classes
  renderContent() {
    throw new Error('renderContent() must be implemented by child class');
  }

  render() {
    const styles = this.getContainerStyles();
    const contentStyles = this.getContentStyles();

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }

        .container {
          font-family: ${styles.fontFamily};
          font-size: ${styles.fontSize};
          font-weight: ${styles.fontWeight};
          color: ${styles.color};
          background-color: ${styles.backgroundColor};
          border: ${styles.border};
          border-radius: ${styles.borderRadius};
          padding: ${styles.padding};
          margin: ${styles.margin};
          text-align: ${styles.textAlign};
          line-height: ${styles.lineHeight};
        }

        ${contentStyles}
      </style>
      <div class="container">
        ${this.renderContent()}
      </div>
    `;
  }
}
