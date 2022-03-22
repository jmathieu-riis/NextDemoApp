/** @module Buttons */
import { theme } from '../../../styles';

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  dark = 'dark',
  error = 'error',
  info = 'info',
  light = 'light',
  link = 'link',
  success = 'success',
  warning = 'warning',
};

const Primary: ButtonType = ButtonType.primary;
const Secondary: ButtonType = ButtonType.secondary;
const Dark: ButtonType = ButtonType.dark;
const Error: ButtonType = ButtonType.error;
const Info: ButtonType = ButtonType.info;
const Light: ButtonType = ButtonType.light;
const Link: ButtonType = ButtonType.link;
const Success: ButtonType = ButtonType.success;
const Warning: ButtonType = ButtonType.warning;

export const buttonTypeToColor = (type: ButtonType | undefined): string => {
  switch (type) {
    case Primary || Secondary || Light || Dark || Error || Warning || Link || Success:
      return theme.colors[type];

    case Info:
      return theme.current.button.info;

    case Secondary:
      return theme.current.button.secondary;

    default:
      return theme.colors.primary;
  }
};
