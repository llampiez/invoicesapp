export class SubtotalPaid extends HTMLElement {
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
        <span>Subtotal</span>
        <span>${amount}</span>
      </p>
    `;
  }
}

customElements.define('subtotal-paid', SubtotalPaid);
