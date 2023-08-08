import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
    cssVarPrefix: 'crystal-yacht',
};
const themeChakra = extendTheme({
  config,
  semanticTokens: {
    fontSizes: {
      
      xxs: '0.55rem',
    },
    colors: {
      error: 'red.500',
      text: {
        default: '#1E1E1E',
        _dark: 'whiteText',
      },
      siteBg: {
        default: 'whiteBg',
        _dark: 'gray.700',
      }
    },
  },
  styles: {
    global: (props) => ({
      'body': {
        color: mode('#1E1E1E', 'whiteAlpha.900')(props),
        bg: mode('#fff', 'cyDark')(props),
      },
    }),
  },
  fonts: {
    body: "'Ysabeau SC', sans-serif",
    heading: "'Ysabeau SC', sans-serif",
  },
  fontSizes: {
    xs: "calc(0.35rem + 0.5vmax)",
    sm: 'calc(0.8125rem + 0.5vmax)', //"0.875rem",
    md: "calc(1rem + 0.5vmax)",
    lg: "calc(1.125rem + 0.5vmax)",
    xl: "calc(1.2rem + 0.5vmax)",
    "2xl": "calc(1.5rem + 0.5vmax)",
    "3xl": "calc(1.875rem + 0.5vmax)",
    "4xl": "calc(2.25rem + 0.5vmax)",
    "5xl": "calc(3rem + 0.5vmax)",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  colors: {
    blue: '#91C9E0',
    button: {
      100: '#91C9E0',
      200: '#73BBD9',
      300: '#5BB1D4', 
    },
    gray: {
      100: '#F8F8F8',
      200: '#D7D7D7',
      300: '#E5E5E5',
    },
    black: {
      100: '#1E1E1E',
      200: '#1E1E1E',
      300: '#1E1E1E',
    },
    text: '#1E1E1E',
    textGray: '#D7D7D7',
    whiteText: '#ffffff',
  },
  space: {
    4.5: '1.125rem',
  },
  textStyles: {
    h1: {
      // fontSize: ['3rem', '4.5rem'],
      fontSize: '5xl',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2xl',
      fontWeight: 'semibold',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: '400',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'xl',
    },
    h4: {
      fontWeight: '400',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'md',
      color: 'textGray',
    },
    bold: {
      fontWeight: 'bold',
      fontSize: 'xl',
      lineHeight: '1.7',
    },
  },
  components: {
    Button: {
      variants: {
        ghost: {
          bg: 'transparent',
          color: 'text',
          fontSize: 'md',
          textTransform: 'uppercase',
          _hover: {
            bg: 'transparent',
          },
          _active: {  
            bg: 'transparent',
          },
          _focusVisible: {
            boxShadow: 'none',
            borderRadius: '0.1rem',
            borderStyle: 'solid',
            borderWidth: 'thin',
            borderColor: 'textGray',
          },
        },
        solid: {
          bg: 'button.100',
          color: 'text', 
          borderRadius: '1.5rem',
          fontSize: 'lg',
          fontWeight: '400',
          textTransform: 'uppercase',
          p: '1rem 2rem',
          _hover: {
            bg: 'button.200',
          },
          _active: {
            bg: 'button.300',
          },
          _focusVisible: {
            boxShadow: 'none',
            bg: 'button.200',
          },
        },
        'blackBgSolid': {
          bg: 'text',
          color: 'whiteText',
          borderRadius: '1.5rem',
          fontSize: 'md',
          fontWeight: '200',
          textTransform: 'uppercase',
          _hover: {
            bg: 'black.200',
          },
          _active: {
            bg: 'black.100',
          },
          _focusVisible: {
            boxShadow: 'none',
            bg: 'black.200',
          },
        },
        'blackBgSquareSolid': {
          bg: 'text',
          color: 'whiteText',
          borderRadius: '0.2rem',
          fontSize: 'lg',
          fontWeight: '400',
          height: '5rem',
          textTransform: 'uppercase',
          _hover: {
            bg: 'black.200',
          },
          _active: {
            bg: 'black.100',
          },
          _focusVisible: {
            boxShadow: 'none',
            bg: 'black.200',
          },
        },
        'grayBgSolid': {
          bg: 'gray.100',
          color: 'whiteText',
          borderRadius: '1.5rem',
          fontSize: 'md',
          fontWeight: '400',
          textTransform: 'uppercase',
          _hover: {
            bg: 'gray.200',
          },
          _active: {
            bg: 'gray.300',
          },
          _focusVisible: {
            boxShadow: 'none',
            bg: 'gray.200',
          },
        },
        'formButton': {
          bg: 'gray.100',
          color: 'text',
          border: 'thin solid #D7D7D7',
          borderRadius: '0.2rem',
          fontSize: 'md',
          fontWeight: '400',
          p: '0.5rem 1rem',
          textTransform: 'uppercase',
          _hover: {
            bg: 'gray.200',
          },
          _active: {
            bg: 'gray.300',
          },
          _focusVisible: {
            boxShadow: 'none',
            bg: 'gray.200',
          },
        },
      }
    },
  },
});
export default themeChakra;