# React Uniform

## Installation

```
npm install --save react-uniform
```

## Basic Usage

Before your app starts, load initial constants:

```
import Uniform from 'react-uniform';

Uniform.add({
  PRIMARY_COLOR: 'red',
  SECONDARY_COLOR: 'blue',
});
```

`Uniform.add()` only accept object as argument.

To retrieve the constant, you can:

```
import Uniform from 'react-uniform';

Uniform.get('PRIMARY_COLOR');
```

## Full APIs

1. This package only exports one Uniform function. To import Uniform
   ```
   import Uniform from 'react-uniform';
   ```
2. `Uniform.add(constants)` constants (Object) - Add constants to Uniform.
3. `Uniform.get(constants)` constants (String/Array of String) - Retrieve a constant / constants.
4. `Uniform.getAllConstants()` Retrieve all constants.
5. `Uniform.inject(Component, constants)` Component (React Component), constants (String/Array of String) - Inject constants to component. Then retrieve it as props.
