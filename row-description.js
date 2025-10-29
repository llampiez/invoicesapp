import { BaseRowCell } from './base-row-cell.js';

export class RowDescription extends BaseRowCell {
  static getContentAttributes() {
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

  getContentStyles() {
    const styles = this.getContainerStyles();

    const descriptionFontSize =
      this.getAttribute('description-font-size') ?? styles.fontSize;
    const descriptionFontWeight =
      this.getAttribute('description-font-weight') ?? styles.fontWeight;
    const descriptionColor =
      this.getAttribute('description-color') ?? styles.color;
    const descriptionMarginBottom =
      this.getAttribute('description-margin-bottom') ?? '0';

    const captionFontSize = this.getAttribute('caption-font-size') ?? '0.875em';
    const captionFontWeight =
      this.getAttribute('caption-font-weight') ?? 'normal';
    const captionColor = this.getAttribute('caption-color') ?? '#666';

    return `
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
    `;
  }

  renderContent() {
    const description = this.getAttribute('description') ?? '';
    const caption = this.getAttribute('caption') ?? '';

    return `
      <div class="description">${description}</div>
      ${caption ? `<div class="caption">${caption}</div>` : ''}
    `;
  }
}

customElements.define('row-description', RowDescription);
