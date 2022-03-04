interface BackgroundAndFontColor {
  background: String,
  color: String,
}

export interface ColorTheme {
  name: String,
  background: String,
  color: String,
  button: {
      info: String,
      secondary: String,
  },
  card: BackgroundAndFontColor,
  navbar: BackgroundAndFontColor,
  headers: {
      h1: {
          color: String,
      }
  }
};
