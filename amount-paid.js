export class AmountPaid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  render() {
    const amount = this.getAttribute('amount') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
      </style>
      <p>
        <span>Amount Paid</span>
        <span>${amount}</span>
      </p>
    `;
  }
}

customElements.define('amount-paid', AmountPaid);
