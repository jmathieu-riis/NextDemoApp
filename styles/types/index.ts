interface BackgroundAndFontColor {
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
