import Colors from './colors';

const LighTheme = {
  dark: false,
  colors: {
    primary: Colors.RED,
    background: Colors.WHITE,
    text: Colors.BLACK,
    border: Colors.GREY,
    card: Colors.BLACK,
    buttonText: Colors.WHITE,
    inputText: Colors.GREY,
    error: Colors.RED,
  },
};

const DarkTheme = {
  dark: true,
  colors: {
    primary: Colors.RED,
    background: Colors.BLACK,
    text: Colors.WHITE,
    border: Colors.WHITE,
    card: Colors.WHITE,
    buttonText: Colors.WHITE,
    inputText: Colors.GREY,
    error: Colors.RED,
  },
};

export const THEMES = {
  dark: DarkTheme,
  light: LighTheme,
};
