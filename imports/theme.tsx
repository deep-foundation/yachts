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
      fontSize: ['48px', '72px'],
      fontWeight: 'bold',
      lineHeight: '110%',
      letterSpacing: '-2%',
    },
    h2: {
      fontSize: ['36px', '48px'],
      fontWeight: 'semibold',
      lineHeight: '110%',
      letterSpacing: '-1%',
    },
    h3: {
      fontWeight: '400',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: '4xl',
    },
    h4: {
      fontWeight: '400',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'md',
      color: 'textGray',
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