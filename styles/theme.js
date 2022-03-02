
const colors = {
    primary: '#7180ac',
    secondary: '#e75a7c',
    light: '#eaeaea',
    dark: '#1a181b',
    darkgrey: '#464c64',
    lightgrey: '#aeb5cb',
    lightsecondary: '#ed839d',
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

const theme = {
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
    }
};

export const myTheme = theme;

export default theme;
