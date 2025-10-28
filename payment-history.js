export class PaymentHistory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
      </style>
      <p>Payment History</p>
    `;
  }
}

customElements.define('payment-history', PaymentHistory);
