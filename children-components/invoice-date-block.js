import { StyledComponent } from '../base-components/styled-component.js';

export class InvoiceDateBlock extends StyledComponent {
  static getCustomAttributes() {
    return ['date-value', 'date-format'];
  }

  render() {
    const dateValue = this.getAttribute('date-value') ?? '';
    const dateFormat = this.getAttribute('date-format') ?? 'YYYY-MM-DD';

    const formattedDate = dayjs(dateValue).format(dateFormat);

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          display: ${this.display};
          flex-direction: ${this.flexDirection};
          gap: ${this.gap};
          align-items: ${this.alignItems};
          justify-content: ${this.justifyContent};
          background-color: ${this.backgroundColor};
          padding: ${this.padding};
          margin: ${this.margin};
          border: ${this.borderWidth} solid ${this.borderColor};
          border-radius: ${this.borderRadius};
          width: ${this.width};
          height: ${this.height};
          color: ${this.color};
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          text-align: ${this.textAlign};
        }
      </style>
      <div class="container">
        <div>Invoice date</div>
        <div>${formattedDate}</div>
      </div>
    `;
  }
}

customElements.define('invoice-date-block', InvoiceDateBlock);
