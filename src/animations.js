import Uniform from './index';
const {
  ANIMATION_CURVE_FAST_OUT_SLOW_IN,
  ANIMATION_CURVE_LINEAR_OUT_SLOW_IN,
} = Uniform.getAllContants();

function fastOutSlowIn(duration = '0.2s') {
  return {
    transitionTimingFunction: ANIMATION_CURVE_FAST_OUT_SLOW_IN,
    transitionDuration: duration,
  };
}

function linearOutSlowIn(duration = '0.2s') {
  return {
    transitionTimingFunction: ANIMATION_CURVE_LINEAR_OUT_SLOW_IN,
    transitionDuration: duration,
  };
}

function fastOutLinearIn(duration = '0.2s') {
  return {
    transitionTimingFunction: ANIMATION_CURVE_FAST_OUT_SLOW_IN,
    transitionDuration: duration,
  };
}

export {
  fastOutSlowIn,
  linearOutSlowIn,
  fastOutLinearIn,
};
