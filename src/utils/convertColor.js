export const hexToRGB = (hex) => {
  const reg = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const result = [];
  result.push(parseInt(reg[1], 16), parseInt(reg[2], 16), parseInt(reg[3], 16));
  return result.join(", ");
};

export const hexToHSL = (hex) => {
  const reg = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(reg[1], 16);
  let g = parseInt(reg[2], 16);
  let b = parseInt(reg[3], 16);
  r /= 255;
  g /= 255;
  b /= 255;
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
    }

    h /= 6;
  }

  return [
    (h * 100 + 0.5) | 0,
    ((s * 100 + 0.5) | 0) + "%",
    ((l * 100 + 0.5) | 0) + "%",
  ].join(", ");
};
