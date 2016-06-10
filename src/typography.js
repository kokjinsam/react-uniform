import Uniform from './index';
const {
  PREFERREED_FONT,
} = Uniform.getAllConstants();

function preferredFont(usePreferred = true) {
  if (usePreferred) {
    return {
      fontFamily: PREFERREED_FONT,
    };
  }

  return {};
}

function display4(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '13.2rem',
    fontWeight: 300,
    lineHeight: 1,
    letterSpacing: '-0.04em',
    opacity: contrast ? 0.54 : 1,
  };
}

function display3(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '5.8rem',
    fontWeight: 400,
    lineHeight: '1.35',
    letterSpacing: '-0.02em',
    opacity: contrast ? 0.54 : 1,
  };
}

function display2(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '4.7rem',
    fontWeight: 400,
    lineHeight: '4.8rem',
    opacity: contrast ? 0.54 : 1,
  };
}

function display1(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '3.6rem',
    fontWeight: 400,
    lineHeight: '4rem',
    opacity: contrast ? 0.54 : 1,
  };
}

function headline(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '2.6rem',
    fontWeight: 400,
    lineHeight: '6rem',
    MozOsxFontSmoothing: 'grayscale',
    opacity: contrast ? 0.87 : 1,
  };
}

function title(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '2.2rem',
    fontWeight: 500,
    lineHeight: 1,
    letterSpacing: '0.02em',
    opacity: contrast ? 0.87 : 1,
  };
}

function subhead(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: '2rem',
    letterSpacing: '0.04em',
    opacity: contrast ? 0.87 : 1,
  };
}

function body2(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.6rem',
    fontWeight: usePreferred ? 500 : 'bold',
    lineHeight: '2rem',
    opacity: contrast ? 0.87 : 1,
  };
}

function body1(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.6rem',
    fontWeight: 400,
    lineHeight: '2rem',
    opacity: contrast ? 0.87 : 1,
  };
}

function caption(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: 1,
    opacity: contrast ? 0.54 : 1,
  };
}

function blockquote(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    position: 'relative',
    fontSize: '2.6rem',
    fontStyle: 'italic',
    fontWeight: 300,
    lineHeight: '1.35',
    letterSpacing: '0.08em',
    opacity: contrast ? 0.87 : 1,
    '&:before': {
      position: 'absolute',
      left: '-0.5em',
      content: '“',
    },
    '&:after': {
      marginLeft: '-0.05em',
      content: '”',
    },
  };
}

function menu(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.6rem',
    fontWeight: 500,
    lineHeight: 1,
    opacity: contrast ? 0.87 : 1,
  };
}

function button(contrast = false, usePreferred = true) {
  return {
    ...preferredFont(usePreferred),
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: 1,
    textTransform: 'uppercase',
    opacity: contrast ? 0.87 : 1,
  };
}

export {
  display4,
  display3,
  display2,
  display1,
  headline,
  title,
  subhead,
  body2,
  body1,
  caption,
  blockquote,
  menu,
  button,
};
