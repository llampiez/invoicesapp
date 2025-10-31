
import { StyledComponent } from './styled-component.js';

export class LocationComponent extends StyledComponent {
  static getCustomAttributes() {
    return ['zip', 'country', 'city', 'street', 'address', 'region', 'building', 'pmb', 'state'];
  }

  constructor() {
    super();
    this._createLocationGetters();
  }

  get address() {
    const state = this.getAttribute('state') ?? '';
    const city = this.getAttribute('city') ?? '';
    const zip = this.getAttribute('zip') ?? '';
    return `${state ? `${state}, ` : ''}${city ? `${city}, ` : ''}${zip}`;
  }

  _createLocationGetters() {
    const constructor = this.constructor;
    constructor.getCustomAttributes().forEach((attr) => {
      const propName = constructor.kebabToCamel(attr);

      if (!Object.getOwnPropertyDescriptor(this, propName)) {
        Object.defineProperty(this, propName, {
          get() {
            return this.getAttribute(attr) ?? '';
          },
          enumerable: true,
        });
      }
    });
  }
}
