export class InvoiceFieldGroup extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._data = [];
  }

  static get observedAttributes() {
    return [
      'title',
      // Title-specific attributes
      'title-font-size',
      'title-font-weight',
      'title-color',
      'title-margin',
      'title-font-family',
      // Container attributes
      'background-color',
      'padding',
      'margin',
      'border',
      'border-radius',
      // Layout attributes
      'grid-columns',
      'row-gap',
      'label-value-gap',
      // Label-specific attributes
      'label-text-align',
      'label-font-size',
      'label-font-weight',
      'label-color',
      'label-font-family',
      // Value-specific attributes
      'value-text-align',
      'value-font-size',
      'value-font-weight',
      'value-color',
      'value-font-family',
    ];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = Array.isArray(value) ? value : [];
    this.render();
  }

  render() {
    const title = this.getAttribute('title');

    // Title-specific attributes
    const titleFontSize = this.getAttribute('title-font-size') || '1rem';
    const titleFontWeight = this.getAttribute('title-font-weight') || 'normal';
    const titleColor = this.getAttribute('title-color') || 'black';
    const titleMargin = this.getAttribute('title-margin') || '0px';
    const titleFontFamily = this.getAttribute('title-font-family') || 'inherit';

    // Container attributes
    const backgroundColor =
      this.getAttribute('background-color') || 'transparent';
    const padding = this.getAttribute('padding') || '0';
    const margin = this.getAttribute('margin') || '0';
    const border = this.getAttribute('border') || 'none';
    const borderRadius = this.getAttribute('border-radius') || '0';

    // Layout attributes
    const rowGap = this.getAttribute('row-gap') || '0px';
    const labelValueGap = this.getAttribute('label-value-gap') || '0px';

    // Label-specific attributes
    const labelTextAlign = this.getAttribute('label-text-align') || 'left';
    const labelFontSize = this.getAttribute('label-font-size') || '1rem';
    const labelFontWeight = this.getAttribute('label-font-weight') || 'normal';
    const labelColor = this.getAttribute('label-color') || 'black';
    const labelFontFamily = this.getAttribute('label-font-family') || 'inherit';

    // Value-specific attributes
    const valueTextAlign = this.getAttribute('value-text-align') || 'right';
    const valueFontSize = this.getAttribute('value-font-size') || '1rem';
    const valueFontWeight = this.getAttribute('value-font-weight') || 'normal';
    const valueColor = this.getAttribute('value-color') || 'black';
    const valueFontFamily = this.getAttribute('value-font-family') || 'inherit';

    const itemsHTML = this._data
      .map(
        (item) => `
      <span class="field-label">${item.label}</span>
      <span class="field-value">${item.value}</span>
    `,
      )
      .join('');

    this.shadowRoot.innerHTML = `
      <style>
        .field-group-container {
          background-color: ${backgroundColor};
          padding: ${padding};
          margin: ${margin};
          border: ${border};
          border-radius: ${borderRadius};
        }

        .field-group-wrapper {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: ${rowGap} ${labelValueGap};
        }

        .field-group-title {
          font-size: ${titleFontSize};
          font-weight: ${titleFontWeight};
          color: ${titleColor};
          margin: ${titleMargin};
          font-family: ${titleFontFamily};
        }

        .field-label {
          text-align: ${labelTextAlign};
          font-size: ${labelFontSize};
          font-weight: ${labelFontWeight};
          color: ${labelColor};
          font-family: ${labelFontFamily};
        }

        .field-value {
          text-align: ${valueTextAlign};
          font-size: ${valueFontSize};
          font-weight: ${valueFontWeight};
          color: ${valueColor};
          font-family: ${valueFontFamily};
        }
      </style>
      <div class="field-group-container">
        ${title ? `<p class="field-group-title">${title}</p>` : ''}
        <div class="field-group-wrapper">
          ${itemsHTML}
        </div>
      </div>
    `;
  }
}

customElements.define('invoice-field-group', InvoiceFieldGroup);
