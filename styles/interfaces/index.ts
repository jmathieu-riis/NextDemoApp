/** @module Styles/Interfaces */

export interface BackgroundAndFontColor {
  background: string,
  color: string,
}

export interface FontStyle {
  fontSize: string,
  fontWeight: string,
}

export interface TypographyTheme {
  headers: {
    h1: FontStyle,
    h2: FontStyle,
    h3: FontStyle,
    h4: FontStyle,
    h5: FontStyle,
  },
  paragraph: FontStyle,
}

export interface GlobalStyles {
  navbar: {},
  desktop: {},
  headers: TypographyTheme['headers'],
  paragraph: TypographyTheme['paragraph'],
  themeTransition?: string,
}

export interface ColorTheme {
  name: string,
  background: string,
  color: string,
  button: {
    info: string,
    secondary: string,
  },
  card: BackgroundAndFontColor,
  navbar: BackgroundAndFontColor,
  headers: {
    h1: {
      color: string,
    };
  };
};

export interface Theme {
  colors: any,
  light: ColorTheme,
  dark: ColorTheme,
  current: ColorTheme,
  global: GlobalStyles,
}
