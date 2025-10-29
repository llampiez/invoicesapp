import { StyledComponent } from '../base-components/styled-component.js';

export class BillingToTeamName extends StyledComponent {
  static getCustomAttributes() {
    return ['team-name'];
  }

  render() {
    const teamName = this.getAttribute('team-name') || 'Billing To Team Name';

    this.shadowRoot.innerHTML = `
      <style>
        span {
          font-size: ${this.fontSize};
          font-weight: ${this.fontWeight};
          font-family: ${this.fontFamily};
          padding: ${this.padding};
          margin: ${this.margin};
          background: ${this.background};
          border: ${this.border};
          border-radius: ${this.borderRadius};
          color: ${this.color};
        }
      </style>
      <span>${teamName}</span>
    `;
  }
}

customElements.define('billing-to-team-name', BillingToTeamName);