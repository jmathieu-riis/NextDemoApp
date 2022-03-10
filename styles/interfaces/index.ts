/** @module Styles/Interfaces */

export interface BackgroundAndFontColor {
  background: string,
  color: string,
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
      }
  }
};

export interface Theme {
  colors: any,
  light: ColorTheme,
  dark: ColorTheme,
  current: ColorTheme,
  global: any,
}
