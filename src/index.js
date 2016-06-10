import React from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

const getDisplayName = Component => (
  Component.displayName || Component.name || 'Component'
);

class Uniform {
  constructor() {
    this.constants = {};
  }

  add(constants) {
    if (!constants) {
      const message = 'Constants are required';
      throw new Error(message);
    }

    if (typeof constants !== 'object') {
      const message = 'Constants have to be in an object';
      throw new Error(message);
    }

    const currentConstants = this.constants;
    const newConstants = {
      ...currentConstants,
      ...constants,
    };

    this.constants = newConstants;
  }

  get(keys) {
    const constants = this.constants;
    if (typeof keys === 'string') {
      return {
        [keys]: constants[keys],
      };
    } else if (keys instanceof Array) {
      const props = {};
      keys.forEach((key) => {
        if (constants[key] !== null || constants[key] !== undefined) {
          props[key] = constants[key];
        }
      });

      return props;
    }

    const message = 'Keys must be either array or string';
    throw new Error(message);
  }

  getAllConstants() {
    return this.constants;
  }

  _getConstantKey(value) {
    const constants = this.constants;
    for (const prop in constants) {
      if (this.hasOwnProperty(prop)) {
        if (this[prop] === value) {
          return prop;
        }
      }
    }

    return null;
  }

  inject(Component, keys) {
    /* eslint-disable react/prefer-es6-class */
    /* eslint-disable react/prefer-stateless-function */
    const constants = this.get(keys);
    const ComponentWithConstants = React.createClass({
      render() {
        return (<Component {...constants} {...this.props} />);
      },
    });

    ComponentWithConstants.displayName = `WithContants(${getDisplayName(Component)})`;
    return hoistNonReactStatic(ComponentWithConstants, Component);
  }
}

export default new Uniform;
