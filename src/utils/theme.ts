import { parse } from "path";

export const defaultThemeColor = {
  default: "#fedfa9",
  light: "#fafafa",
  dark: "#525252",
};

export const setStyleProperty = (key: string, val: string) => {
  document.documentElement.style.setProperty(key, val);
};

export const getStyleProperty = (key: string) => {
  return document.documentElement.style.getPropertyValue(key);
};

export const setThemeColor = (color: string) => {
  try {
    setStyleProperty("--theme-customize-color", color);
    setShadowColor(color);
  } catch (error) {
    alert(error);
  }
};

const hexToRgb = (hex: string): number[] => {
  hex = hex.replace("#", "");
  hex = hex.toLowerCase();
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((color) => color + color)
      .join("");
  }
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
  ];
  // const bigint = parseInt(hex, 16);
  // return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 266];
};

const getLuminance = (r: number, g: number, b: number) => {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
interface ElementColor {
  fontColor: string;
  darkShadow: string;
  lightShadow: string;
  borderColor: string;
}
export const getElementColor = (color: string): ElementColor => {
  const colorCode = color.includes("#") ? color.replace("#", "") : color;
  const n = 0.3;

  const [r, g, b] = hexToRgb(color);
  const luminance = getLuminance(r, g, b);
  const fontColor = formatColorByTheme(
    colorCode,
    luminance > 127 ? -n * 2 : n * 4
  );

  const lightShadow = formatColorByTheme(colorCode, n);
  const darkShadow = formatColorByTheme(colorCode, -n);

  const borderColor = formatColorByTheme(
    colorCode,
    luminance > 127 ? -n / 4 : n
  );

  return {
    fontColor,
    darkShadow,
    lightShadow,
    borderColor,
  };
};

const setShadowColor = (color: string) => {
  try {
    const { fontColor, darkShadow, lightShadow, borderColor } =
      getElementColor(color);
    setStyleProperty("--neu-light-shadow", lightShadow);
    setStyleProperty("--neu-dark-shadow", darkShadow);
    setStyleProperty("--neu-font-color", fontColor);
    setStyleProperty("--neu-border-color", borderColor);
  } catch (error) {}
};

// 根据主题色生成不同的阴影颜色
function formatColorByTheme(color: string, n = 0) {
  if (String(color).replace(/[^0-9a-f]/gi, "").length < 6) {
    color = `${color[0]}${color[0]}${color[1]}${color[1]}${color[2]}${color[2]}`;
  }
  color = color.toLowerCase();
  let finalColor = "#";
  for (let i = 0; i < 3; i++) {
    let singleColor = parseInt(color.substring(2 * i, 2 * i + 2), 16);
    const shadowColor = Math.round(
      Math.min(Math.max(0, singleColor + singleColor * n), 255)
    ).toString(16);
    finalColor += ("00" + shadowColor).substring(shadowColor.length);
  }
  return finalColor;
}
