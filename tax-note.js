export class TaxNote extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
      </style>
      <p>Tax to be paid on reverse charge basis.</p>
    `;
  }
}

customElements.define('tax-note', TaxNote);
