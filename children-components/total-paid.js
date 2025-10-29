import { StyledComponent } from '../base-components/styled-component.js';

export class TotalPaid extends StyledComponent {
  static getCustomAttributes() {
    return [
      'amount',
      'label-color',
      'amount-color',
      'label-font-size',
      'label-font-weight',
      'amount-font-size',
      'amount-font-weight',
      'direction',
    ];
  }

  render() {
    const amount = this.getAttribute('amount') ?? '';

    const labelColor = this.getAttribute('label-color') ?? 'black';
    const labelFontSize = this.getAttribute('label-font-size') ?? this.fontSize;
    const labelFontWeight = this.getAttribute('label-font-weight') ?? this.fontWeight;

    const amountColor = this.getAttribute('amount-color') ?? 'black';
    const amountFontSize = this.getAttribute('amount-font-size') ?? this.fontSize;
    const amountFontWeight = this.getAttribute('amount-font-weight') ?? 'normal';

    const direction = this.getAttribute('direction') ?? 'row';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: ${this.fontFamily};
          margin: ${this.margin};
        }

        .container {
          display: flex;
          flex-direction: ${direction};
          gap: ${this.gap};
          align-items: ${direction === 'row' ? 'center' : 'flex-start'};
          justify-content: ${this.justifyContent};
          background-color: ${this.backgroundColor};
          border: ${this.borderWidth} solid ${this.borderColor};
          border-radius: ${this.borderRadius};
          padding: ${this.padding};
        }

        .label {
          color: ${labelColor};
          font-size: ${labelFontSize};
          font-weight: ${labelFontWeight};
          margin: 0;
        }

        .amount {
          color: ${amountColor};
          font-size: ${amountFontSize};
          font-weight: ${amountFontWeight};
          margin: 0;
        }
      </style>
      <div class="container">
        <span class="label">Total</span>
        <span class="amount">${amount}</span>
      </div>
    `;
  }
}

customElements.define('total-paid', TotalPaid);
