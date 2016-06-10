import Uniform from './index';
const {
  SHADOW_KEY_UMBRA_OPACITY,
  SHADOW_KEY_PENUMBRA_OPACITY,
  SHADOW_AMBIENT_SHADOW_OPACITY,
} = Uniform.getAllContants();

function focus() {
  return {
    boxShadow: '0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36)',
  };
}

function dp2() {
  return {
    boxShadow: `0 2px 2px 0 rgba(0, 0, 0, ${SHADOW_KEY_PENUMBRA_OPACITY}), 0 3px 1px -2px rgba(0, 0, 0, ${SHADOW_KEY_UMBRA_OPACITY}), 0 1px 5px 0 rgba(0, 0, 0, ${SHADOW_AMBIENT_SHADOW_OPACITY})`,
  };
}

function dp3() {
  return {
    boxShadow: `0 3px 4px 0 rgba(0, 0, 0, ${SHADOW_KEY_PENUMBRA_OPACITY}), 0 3px 3px -2px rgba(0, 0, 0, ${SHADOW_KEY_UMBRA_OPACITY}), 0 1px 8px 0 rgba(0, 0, 0, ${SHADOW_AMBIENT_SHADOW_OPACITY})`,
  };
}

function dp4() {
  return {
    boxShadow: `0 4px 5px 0 rgba(0, 0, 0, ${SHADOW_KEY_PENUMBRA_OPACITY}), 0 1px 10px 0 rgba(0, 0, 0, ${SHADOW_KEY_UMBRA_OPACITY}), 0 2px 4px -1px rgba(0, 0, 0, ${SHADOW_AMBIENT_SHADOW_OPACITY})`,
  }
}

function dp6() {
  return {
    boxShadow: `0 6px 10px 0 rgba(0, 0, 0, ${SHADOW_KEY_PENUMBRA_OPACITY}), 0 1px 18px 0 rgba(0, 0, 0, ${SHADOW_KEY_UMBRA_OPACITY}), 0 3px 5px -1px rgba(0, 0, 0, ${SHADOW_AMBIENT_SHADOW_OPACITY})`,
  };
}

function dp8() {
  return {
    boxShadow: `0 8px 10px 1px rgba(0, 0, 0, ${SHADOW_KEY_PENUMBRA_OPACITY}), 0 3px 14px 2px rgba(0, 0, 0, ${SHADOW_KEY_UMBRA_OPACITY}), 0 5px 5px -3px rgba(0, 0, 0, ${SHADOW_AMBIENT_SHADOW_OPACITY})`,
  };
}

function dp16() {
  return {
    boxShadow: `0 16px 24px 2px rgba(0, 0, 0, ${SHADOW_KEY_PENUMBRA_OPACITY}), 0 6px 30px 5px rgba(0, 0, 0, ${SHADOW_KEY_UMBRA_OPACITY}), 0 8px 10px -5px rgba(0, 0, 0, ${SHADOW_AMBIENT_SHADOW_OPACITY})`,
  };
}

export {
  focus,
  dp2,
  dp3,
  dp4,
  dp6,
  dp8,
  dp16,
};
