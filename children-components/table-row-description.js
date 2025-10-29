import { StyledComponent } from '../base-components/styled-component.js';

export class TableRowDescription extends StyledComponent {
  static getCustomAttributes() {
    return [
      'description',
      'caption',
      'description-font-size',
      'description-font-weight',
      'description-color',
      'description-margin-bottom',
      'caption-font-size',
      'caption-font-weight',
      'caption-color',
    ];
  }

  render() {
    const description = this.getAttribute('description') ?? '';
    const caption = this.getAttribute('caption') ?? '';

    const descriptionFontSize = this.getAttribute('description-font-size') ?? '1rem';
    const descriptionFontWeight = this.getAttribute('description-font-weight') ?? 'normal';
    const descriptionColor = this.getAttribute('description-color') ?? 'black';
    const descriptionMarginBottom = this.getAttribute('description-margin-bottom') ?? '0';

    const captionFontSize = this.getAttribute('caption-font-size') ?? '0.875em';
    const captionFontWeight = this.getAttribute('caption-font-weight') ?? 'normal';
    const captionColor = this.getAttribute('caption-color') ?? '#666';

    this.shadowRoot.innerHTML = `
      <style>
        .tr-description {
          font-family: ${this.fontFamily};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          color: ${this.color};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          padding: ${this.padding};
          margin: ${this.margin};
          text-align: ${this.textAlign};
          line-height: ${this.lineHeight};
        }

        .description {
          font-size: ${descriptionFontSize};
          font-weight: ${descriptionFontWeight};
          color: ${descriptionColor};
          margin-bottom: ${descriptionMarginBottom};
        }

        .caption {
          font-size: ${captionFontSize};
          font-weight: ${captionFontWeight};
          color: ${captionColor};
        }
      </style>
      <div class="tr-description">
        <div class="description">${description}</div>
        ${caption ? `<div class="caption">${caption}</div>` : ''}
      </div>
    `;
  }
}

customElements.define('tr-description', TableRowDescription);
