import { ITheme, IThemeColors } from 'src/contexts/theme/ThemeProvider';

const layout = {
  spacing: {
    xs: '0.4rem',
  },
};

export const lightThemeColors: IThemeColors = {
  primary: '#FFF',
  secondary: '#FFF',
  tertiary: '#FFF',
};

export const darkThemeColors: IThemeColors = {
  primary: '#000',
  secondary: '#000',
  tertiary: '#000',
};

export const lightTheme: ITheme = {
  colors: { ...lightThemeColors },
  layout: { ...layout },
};

export const darkTheme: ITheme = {
  colors: { ...darkThemeColors },
  layout: { ...layout },
};
