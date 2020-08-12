export const getColor = (name) => {
  const palette = {
    bg: "#0c0713",
    bgHighlight: "#160e22",
    border: "#25183a",
    lightBorder: "#7d52c3",
    light: "#e6e6e6",
    primary: "#2DE2E6",
    secondary: "#E92EFB",
    info: "#440BD4",
    danger: "#FF2079",
    dark: "#08040c",
  };
  return palette[name];
};
export const getNeon = (color, size) => {
  const whiteGlow = size * 0.1;
  const whiteBlur = size * 0.4;
  const lightGlow = size * 0.4;
  const lightBlur = size * 0.6;
  const darkGlow = size * 4;
  const darkBlur = size * 0.4;
  const whiteGlowInner = size * 0.5;
  const whiteBlurInner = size * 0.2;
  const lightGlowInner = size * 0.4;
  const lightBlurInner = size * 0.2;
  const darkGlowInner = size * 1.5;
  const darkBlurInner = size * 0.4;

  const shades = {
    red: {
      white: "#fff7f7",
      light: "#e97272",
      dark: "#e50b0b",
    },
    success: {
      white: "#f7fffe",
      light: "#8bfcff",
      dark: "#2de2e6",
    },
  };

  return `box-shadow: 0 0 ${whiteGlow}vw ${whiteBlur}vw ${shades[color].white},
   0 0 ${lightGlow}vw ${lightBlur}vw ${shades[color].light},
   0 0 ${darkGlow}vw ${darkBlur}vw ${shades[color].dark}, 
   inset 0 0 ${darkGlowInner}vw ${darkBlurInner}vw ${shades[color].dark},
   inset 0 0 ${lightGlowInner}vw ${lightBlurInner}vw ${shades[color].light}, 
   inset 0 0 ${whiteGlowInner}vw ${whiteBlurInner}vw ${shades[color].white};`;
};

export const mapTagsToObject = (data) => {
  //TODO make functionality for MultiQuestion frames
  let obj = {};
  for (let i = 0; i < data.length; i++) {
    obj[data[i].tag] = "";
  }
  return obj;
};
