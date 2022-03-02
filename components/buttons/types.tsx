import theme from '../../styles/theme';


export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary',
    dark = 'dark',
    failure = 'failure',
    info = 'info',
    light = 'light',
    link = 'link',
    success = 'success',
    warning = 'warning',
};

const Primary: ButtonType = ButtonType.primary;
const Secondary: ButtonType = ButtonType.secondary;
const Dark: ButtonType = ButtonType.dark;
const Failure: ButtonType = ButtonType.failure;
const Info: ButtonType = ButtonType.info;
const Light: ButtonType = ButtonType.light;
const Link: ButtonType = ButtonType.link;
const Success: ButtonType = ButtonType.success;
const Warning: ButtonType = ButtonType.warning;

export const buttonTypeToColor = (type: ButtonType): string => {
    switch (type) {
        case Primary || Secondary || Light || Dark:
            return type;
        
        case Failure:
            return theme.colors.red;
    
        default:
            return Primary;
    }
};