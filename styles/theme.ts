import { ColorTheme } from './types';

const colors = {
    primary: '#7180ac',
    secondary: '#e75a7c',
    lightsecondary: '#ed839d',
    black: '#000000',
    dark: '#1a181b',
    darkergrey: '#25252d',
    darkgrey: '#464c64',
    white: '#ffffff',
    light: '#eaeaea',
    lightgrey: '#aeb5cb',
    lightergrey: '#ccd0db',
    success: '#88a975',
    warning: '#ff871f',
    error: '#d81159',
    link: '#f0976a',
};


const lightTheme: ColorTheme = {
    name: 'light',
    background: colors.light,
    color: colors.dark,
    button: {
        info: colors.darkgrey,
        secondary: colors.secondary,
    },
    card: {
        background: colors.light,
        color: colors.dark,
    },
    navbar: {
        background: colors.dark,
        color: colors.light,
    },
    headers: {
        h1: {
            color: colors.dark,
        }
    }
};

const darkTheme: ColorTheme = {
    name: 'dark',
    background: colors.dark,
    color: colors.light,
    button: {
        info: colors.lightgrey,
        secondary: colors.lightsecondary,
    },
    card: {
        background: colors.darkergrey,
        color: colors.light,
    },
    navbar: {
        background: colors.darkergrey,
        color: colors.light,
    },
    headers: {
        h1: {
            color: colors.secondary,
        }
    }
};

const typography = {
    headers: {
        h1: {
            fontSize: '36px',
            fontWeight: '700',
        },
        h2: {
            fontSize: '28px',
            fontWeight: '600',
        },
        h3: {
            fontSize: '24px',
            fontWeight: '500',
        },
        h4: {
            fontSize: '20px',
            fontWeight: '500',
        },
        h5: {
            fontSize: '18px',
            fontWeight: '600',
        },
    },
    paragraph: {
        fontSize: '16px',
        fontWeight: 'normal',
    }
};

export const theme = {
    colors: colors,
    dark: darkTheme,
    light: lightTheme,
    current: lightTheme,
    global: {
        navbar: {
            maxWidth: '1920px',
            height: '50px',
        },
        desktop: {
            width: '1920px',
        },
        headers: typography.headers,
        paragraph: typography.paragraph,
        themeTransition: 'background 175ms ease, color 175ms ease',
    }
};
