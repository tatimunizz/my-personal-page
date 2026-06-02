// Define the shape of your theme
export interface Theme {
  colors: {
    dark: string;
    secondaryDark: string;
    medium: string;
    light: string;
    secondaryLight: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
  };
}

// orangeTheme
export const orangeTheme: Theme = {
  colors: {
    dark: '#003049',
    secondaryDark: '#d62828',
    medium: '#f77f00',
    light: '#fcbf49',
    secondaryLight: '#eae2b7'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  typography: {
    fontFamily: 'Ubuntu Mono, sans-serif',
    fontSize: {
      small: '18px',
      medium: '24px',
      large: '36px',
    },
  },
};

// Blue theme
export const blueTheme: Theme = {
  colors: {
    dark: '#184e77',
    secondaryDark: '#76c893',
    medium: '#99d98c',
    light: '#d9ed92',
    secondaryLight: '#ffffff'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  typography: {
    fontFamily: 'Ubuntu Mono, sans-serif',
    fontSize: {
      small: '18px',
      medium: '24px',
      large: '36px',
    },
  },
};