// src/theme.ts
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/cormorant-garamond/700.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        height: "100%",
        width: "100%",
      },
      article: {
        margin: 0,
        padding: 0,
      },
      a: {
        fontFamily: `"Montserrat", sans-serif`,
      },
    },
  },
  fonts: {
    heading: `"Cormorant Garamond", serif`,
    text: `"Montserrat", sans-serif`,
  },
  animations: {
    defaultSmooth: ".3s linear",
  },
  colors: {
    common: {
      "50": "#f6f6f6",
      "100": "#e7e7e7",
      "200": "#d1d1d1",
      "300": "#b0b0b0",
      "400": "#888888",
      "500": "#6d6d6d",
      "600": "#464646",
      "700": "#353535",
      "800": "#252525",
      "900": "#121212",
      "950": "#050505",
      transparent: {
        "50": "#f6f6f655",
        "100": "#e7e7e755",
        "200": "#d1d1d155",
        "300": "#b0b0b055",
        "400": "#88888855",
        "500": "#6d6d6d55",
        "600": "#46464655",
        "700": "#35353555",
        "800": "#25252555",
        "900": "#12121255",
        "950": "#05050555",
      },
    },
    marine: {
      "50": "#eefdfd",
      "100": "#d4f8f9",
      "200": "#afeef2",
      "300": "#78e1e8",
      "400": "#39cad7",
      "500": "#1daab9",
      "600": "#1b8c9f",
      "700": "#1d7181",
      "800": "#205c6a",
      "900": "#1f4d5a",
      "950": "#0f323d",
      transparent: {
        "50": "#eefdfd55",
        "100": "#d4f8f955",
        "200": "#afeef255",
        "300": "#78e1e855",
        "400": "#39cad755",
        "500": "#1daab955",
        "600": "#1b8c9f55",
        "700": "#1d718155",
        "800": "#205c6a55",
        "900": "#1f4d5a55",
        "950": "#0f323d55",
      },
    },
    violet: {
      "50": "#fbf6fe",
      "100": "#f6e9fe",
      "200": "#eed7fd",
      "300": "#e0b8fa",
      "400": "#cd8bf5",
      "500": "#ba5fed",
      "600": "#a131dd",
      "700": "#902cc4",
      "800": "#7929a0",
      "900": "#632281",
      "950": "#440d5e",
      transparent: {
        "50": "#fbf6fe55",
        "100": "#f6e9fe55",
        "200": "#eed7fd55",
        "300": "#e0b8fa55",
        "400": "#cd8bf555",
        "500": "#ba5fed55",
        "600": "#a131dd55",
        "700": "#902cc455",
        "800": "#7929a055",
        "900": "#63228155",
        "950": "#440d5e55",
      },
    },
    ocre: {
      "50": "#fef8ee",
      "100": "#fcefd8",
      "200": "#f8dbb0",
      "300": "#f4c17d",
      "400": "#ee9d49",
      "500": "#ea8125",
      "600": "#de691b",
      "700": "#b64f18",
      "800": "#913f1b",
      "900": "#753519",
      "950": "#3f190b",
      transparent: {
        "50": "#fef8ee55",
        "100": "#fcefd855",
        "200": "#f8dbb055",
        "300": "#f4c17d55",
        "400": "#ee9d4955",
        "500": "#ea812555",
        "600": "#de691b55",
        "700": "#b64f1855",
        "800": "#913f1b55",
        "900": "#75351955",
        "950": "#3f190b55",
      },
    },
  },
});
