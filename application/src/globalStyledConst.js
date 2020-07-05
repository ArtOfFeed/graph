const fontSizeNumber = 16;

export const getRemsFromPixels = (pixels) => {
  const numberRem = pixels / fontSizeNumber;
  return `${numberRem}rem`;
};

const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

const hexToRgb = (hex) => {
  const replacedHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(replacedHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
};

export const rgba = (hex, alpha) => {
  const colorRgb = hexToRgb(hex);
  return `rgba(${colorRgb.r}, ${colorRgb.g}, ${colorRgb.b}, ${alpha})`;
};

export const isHex = (colorValue) => shorthandRegex.test(colorValue);
