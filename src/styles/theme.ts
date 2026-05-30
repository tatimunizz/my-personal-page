// Define the shape of your theme
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    error: string;
    success: string;
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

// Light theme
export const lightTheme: Theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#ffffff',
    text: '#212529',
    error: '#dc3545',
    success: '#28a745',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: {
      small: '12px',
      medium: '16px',
      large: '20px',
    },
  },
};

// Dark theme
export const darkTheme: Theme = {
  colors: {
    primary: '#0d6efd',
    secondary: '#adb5bd',
    background: '#121212',
    text: '#f8f9fa',
    error: '#f8d7da',
    success: '#d1e7dd',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    fontSize: {
      small: '12px',
      medium: '16px',
      large: '20px',
    },
  },
};