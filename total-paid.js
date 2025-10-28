export class TotalPaid extends HTMLElement {
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
        <span>Total</span>
        <span>${amount}</span>
      </p>
    `;
  }
}

customElements.define('total-paid', TotalPaid);
