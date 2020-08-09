export const getColor = (name) => {
  const palette = {
    white: "#ffffff",
    lightgrey: "#f6f8fa",
    darkgrey: "#3d4248",
    dark: "#0c131a",
    lightBorder: "#e1e4e8",
    clearBorder: "#e1e4e8",
    success: "#2ea44f",
    successLight: "#6dbf84",
    successHighlight: "#eaf6ed",
    successBorder: "#c0e4ca",
    successDark: "#25833f",
    danger: "#d73a49",
    primary: "#0070f3",
    secondary: "#8d97a4",
  };
  return palette[name];
};
