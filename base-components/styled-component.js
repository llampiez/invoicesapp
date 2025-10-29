import { StatefulComponent } from './stateful-component.js';

export class StyledComponent extends StatefulComponent {
  // Define standard style attributes that all styled components will have
  static STYLE_ATTRIBUTES = [
    'font-size',
    'font-weight',
    'font-family',
    'color',
    'background',
    'margin',
    'padding',
    'border',
    'border-radius',
    'text-align',
    'justify-content',
    'align-items',
    'gap',
    'width',
    'height',
    'display',
    'flex-direction',
    'line-height',
    'letter-spacing',
  ];

  // Default values for style attributes
  static STYLE_DEFAULTS = {
    'font-size': '16px',
    'font-weight': 'normal',
    'font-family': 'inherit',
    'color': 'inherit',
    'background': 'transparent',
    'margin': '0',
    'padding': '0',
    'border': 'none',
    'border-radius': '0',
    'text-align': 'left',
    'justify-content': 'flex-start',
    'align-items': 'stretch',
    'gap': '0',
    'width': 'auto',
    'height': 'auto',
    'display': 'block',
    'flex-direction': 'row',
    'line-height': 'normal',
    'letter-spacing': 'normal',
  };

  static get observedAttributes() {
    return ['mode', ...this.STYLE_ATTRIBUTES, ...this.getCustomAttributes()];
  }

  // Convert kebab-case to camelCase for property names
  static kebabToCamel(str) {
    return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  }

  // Create dynamic getters for all style attributes
  constructor() {
    super();
    this._createStyleGetters();
  }

  _createStyleGetters() {
    const constructor = this.constructor;
    constructor.STYLE_ATTRIBUTES.forEach((attr) => {
      const propName = constructor.kebabToCamel(attr);

      // Only create getter if it doesn't already exist
      if (!Object.getOwnPropertyDescriptor(this, propName)) {
        Object.defineProperty(this, propName, {
          get() {
            return this.getAttribute(attr) || constructor.STYLE_DEFAULTS[attr];
          },
          enumerable: true,
        });
      }
    });
  }
}
