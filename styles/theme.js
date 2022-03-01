
const colors = {
    primary: '#7180acff',
    secondary: '#e75a7cff',
    light: '#eaeaeaff',
    dark: '#1a181bff',
};

const lightTheme = {
    background: colors.light,
    color: colors.dark,
    navbar: {
        background: colors.dark,
        color: colors.light,
    }
};

const darkTheme = {
    background: colors.dark,
    color: colors.light,
    navbar: {
        background: colors.light,
        color: colors.dark,
    }
};

const theme = {
    colors: colors,
    dark: darkTheme,
    light: lightTheme,
    current: lightTheme,
    global: {
        navbar: {
            maxWidth: '1920px',
        }
    }
};

export const myTheme = theme;

export default theme;
