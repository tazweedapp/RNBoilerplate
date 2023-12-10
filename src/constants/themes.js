import Colors from './colors';

const LighTheme = {
  dark: false,
  colors: {
    primary: Colors.WHITE,
    background: Colors.WHITE,
    text: Colors.BLACK,
    border: Colors.GREY,
  },
};

const DarkTheme = {
  dark: true,
  colors: {
    primary: Colors.BLACK,
    background: Colors.BLACK,
    text: Colors.WHITE,
    border: Colors.WHITE,
  },
};

export const THEMES = {
  dark: DarkTheme,
  light: LighTheme,
};
