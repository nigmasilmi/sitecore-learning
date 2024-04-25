import React, { ReactNode, useContext, useReducer } from 'react';
import { darkThemeColors, lightTheme, lightThemeColors } from 'src/styles/themes';

export interface ITheme {
  colors: IThemeColors;
  layout: {
    spacing: {
      xs: string;
    };
  };
}

export interface IThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
}

type SetDarkTheme = 'dark';
type SetLightTheme = 'light';
type Action = SetThemeColor;

type SetThemeColorPayload = SetDarkTheme | SetLightTheme;

type SetThemeColor = {
  type: 'SET_THEME_COLOR';
  payload: SetThemeColorPayload;
};

type ThemeContextValue = ITheme & {
  setThemeColor: (mode: SetThemeColorPayload) => void;
};

const initialTheme = lightTheme;

const ThemeContext = React.createContext<ITheme>(initialTheme);

const themeReducer = (state: ITheme, action: Action): ITheme => {
  if (action.type === 'SET_THEME_COLOR') {
    action.payload === 'light'
      ? { ...state, colors: lightThemeColors }
      : { ...state, colors: darkThemeColors };
  }

  return lightTheme;
};

export const useThemeContext = () => {
  const themeCtx = useContext(ThemeContext);
  return themeCtx;
};

interface ThemeProviderProps {
  children: ReactNode | ReactNode[];
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const [themeState, dispatch] = useReducer(themeReducer, initialTheme);

  const ctx: ThemeContextValue = {
    setThemeColor(payload: SetThemeColorPayload) {
      dispatch({ type: 'SET_THEME_COLOR', payload });
    },
    colors: themeState.colors,
    layout: themeState.layout,
  };

  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
