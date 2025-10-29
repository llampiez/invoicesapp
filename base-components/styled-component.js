import { StatefulComponent } from './stateful-component.js';

export class StyledComponent extends StatefulComponent {
  // Define standard style attributes that all styled components will have
  static STYLE_ATTRIBUTES = [
    'font-size',
    'font-weight',
    'font-family',
    'font-style',
    'color',
    'background',
    'background-color',
    'margin',
    'padding',
    'border',
    'border-radius',
    'border-width',
    'border-color',
    'text-align',
    'text-transform',
    'text-decoration',
    'justify-content',
    'align-items',
    'gap',
    'width',
    'height',
    'max-width',
    'max-height',
    'min-width',
    'min-height',
    'display',
    'flex-direction',
    'line-height',
    'letter-spacing',
    'box-shadow',
    'opacity',
  ];

  // Default values for style attributes
  static STYLE_DEFAULTS = {
    'font-size': '16px',
    'font-weight': 'normal',
    'font-family': 'inherit',
    'font-style': 'normal',
    'color': 'inherit',
    'background': 'transparent',
    'background-color': 'transparent',
    'margin': '0',
    'padding': '0',
    'border': 'none',
    'border-radius': '0',
    'border-width': '0',
    'border-color': 'transparent',
    'text-align': 'left',
    'text-transform': 'none',
    'text-decoration': 'none',
    'justify-content': 'flex-start',
    'align-items': 'stretch',
    'gap': '0',
    'width': 'auto',
    'height': 'auto',
    'max-width': 'none',
    'max-height': 'none',
    'min-width': '0',
    'min-height': '0',
    'display': 'block',
    'flex-direction': 'row',
    'line-height': 'normal',
    'letter-spacing': 'normal',
    'box-shadow': 'none',
    'opacity': '1',
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
