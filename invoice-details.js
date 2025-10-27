export class InvoiceDetails extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this._mode = 'preview'; // Default state: preview or edit
  }

  // Define the attributes we want to observe
  static get observedAttributes() {
    return ['title'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'mode') {
        this._mode = newValue || 'preview';
      }
      this.render();
    }
  }

  // Getters and setters for mode
  get mode() {
    return this._mode;
  }

  set mode(value) {
    if (value === 'preview' || value === 'edit') {
      this._mode = value;
      this.setAttribute('mode', value);
    }
  }

  render() {
    const title = this.getAttribute('title') || '';

    this.shadowRoot.innerHTML = `
      <style>
        .container {
          font-family: system-ui, -apple-system, sans-serif;
        }

        .title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #1f2937;
        }

        ::slotted(dl) {
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        ::slotted(.detail-item) {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 0;
          border-bottom: 1px solid #e5e7eb;
        }

        ::slotted(.detail-item:last-child) {
          border-bottom: none;
        }

        ::slotted(dt) {
          font-weight: 500;
          color: #6b7280;
          font-size: 0.875rem;
        }

        ::slotted(dd) {
          font-weight: 600;
          color: #1f2937;
          font-size: 0.875rem;
          margin: 0;
        }
      </style>
      <div class="container">
        ${title ? `<div class="title">${title}</div>` : ''}
        <div class="details-wrapper">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('invoice-details', InvoiceDetails);
