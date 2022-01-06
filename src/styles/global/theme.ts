export type TypeTheme = {
  color: string;
  colors: {
    primary: string;
    secondary: string;
  };
  backgroundColor: {
    primary: string;
    secondary: string;
  };
  borderColor: string;
};

export const themeLight = {
  color: '#363636',
  colors: {
    primary: '#363636',
    secondary: '#f5f5f5'
  },
  backgroundColor: {
    primary: '#FFFFFF',
    secondary: '#F5F5F5'
  },
  borderColor: 'rgba(0, 0, 0, 0.25)'
};

export const themeDark = {
  color: '#FFFFFF',
  colors: {
    primary: '#FFFFFF',
    secondary: '#363636'
  },

  backgroundColor: {
    primary: '#1C1C1C',
    secondary: '#292929'
  },
  borderColor: '#E5E5E5'
};

const theme = {
  light: themeLight,
  dark: themeDark
};
export default theme;
