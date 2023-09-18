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
      '.swiper-button-next': { color: 'blue.300' },
      '.swiper-button-prev': { color: 'blue.300' },
    }),
  },
  fonts: {
    body: "'Ysabeau SC', sans-serif",
    heading: "'Ysabeau SC', sans-serif",
  },
  fontSizes: {
    '2xs': "calc(0.3rem + 0.5vmax)",
    xs: "calc(0.55rem + 0.5vmax)",
    sm: 'calc(0.8125rem + 0.5vmax)', //"0.875rem",
    md: "calc(1rem + 0.5vmax)",
    lg: "calc(1.125rem + 0.5vmax)",
    xl: "calc(1.2rem + 0.5vmax)",
    "2xl": "calc(1.5rem + 0.5vmax)",
    "3xl": "calc(1.875rem + 0.5vmax)",
    "4xl": "calc(2.3rem + 0.5vmax)",
    "5xl": "calc(3rem + 0.5vmax)",
    "6xl": "calc(3.25rem + 0.5vmax)",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  colors: {
    blue: {
      100: '#acadaf',
      200: '#5ba1e4',
      300: '#91C9E0',
      500: '#0029ff',
      900: '#004c6b',
    },
    button: {
      100: '#91C9E0',
      200: '#73BBD9',
      300: '#5BB1D4',  
      600: '#91C9E0',
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
  // space: {
  //   4.5: '1.125rem',
  // },
  textStyles: {
    h1: {
      fontSize: '6xl',
      fontWeight: 'medium',
      textTransform: 'uppercase',
      lineHeight: '1.2',
    },
    h2: {
      fontSize: '2xl',
      fontWeight: 'semibold',
      textTransform: 'uppercase',
    },
    h3: {
      fontWeight: 'regular',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'xl',
    },
    h4: {
      fontWeight: 'regular',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'md',
      color: 'text',
    },
    upperMenu: {
      fontWeight: 'regular',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      fontSize: 'xs',
      color: 'text',
    },
    h2Generator: {
      fontSize: 'md',
      fontWeight: 'regular',
      textTransform: 'uppercase',
      color: 'textGray',
    },
    regularTextBlock: {
      fontWeight: 'regular',
      fontSize: 'xs',
      lineHeight: '1.4',
      color: 'text',
      textAlign: 'justify',
    },
    regularTextTitle: {
      fontWeight: 'semiBold',
      fontSize: 'xs',
      lineHeight: '1.7',
      color: 'text',
      textTransform: 'uppercase',
    },
    bold: {
      fontWeight: '900',
      fontSize: 'xl',
      lineHeight: '1.7',
    },
    semiBoldText: {
      fontWeight: 'semiBold',
      fontSize: 'xl',
      lineHeight: '1.3',
    },
    downMenu: {
      fontWeight: 'semiBold',
      fontSize: 'xs',
      lineHeight: '1',
      color: 'text',
      textTransform: 'uppercase',
    },
    contactsDownMenu: {
      fontWeight: 'regular',
      fontSize: 'xs',
      lineHeight: '1',
      color: 'text',
    },
    generationFormItem: {
      fontWeight: 'light',
      fontSize: 'sm',
      lineHeight: '1.2',
      color: 'text',
    },
    whiteTextShadow: {
      fontWeight: 'light',
      fontSize: 'sm',
      lineHeight: '1.2',
      color: 'whiteText',
      textTransform: 'uppercase',
      textShadow: '0px 1px 1px rgba(0, 0, 0, 0.35)',
    },
    yachtsBlueTitle: {
      fontWeight: 'semiBold',
      fontSize: 'sm',
      lineHeight: '1.2',
      color: 'blue.300',
      textTransform: 'uppercase',
    },
    yachtsDescription: {
      fontWeight: 'regular',
      fontSize: 'xs',
      lineHeight: '1.5',
      color: 'text',
      textTransform: 'uppercase',
      textAlign: 'justify',
    },
    yachtBlueTitle: {
      fontWeight: 'semiBold',
      fontSize: '4xl',
      lineHeight: '1.2',
      color: 'blue.300',
      textTransform: 'uppercase',
    },
    yachtBlueSubtitle: {
      fontWeight: 'medium',
      fontSize: '2xl',
      lineHeight: '1.2',
      color: 'text',
      textTransform: 'uppercase',
    },
    yachtBlockTitle: {
      fontWeight: 'semiBold',
      fontSize: 'sm',
      lineHeight: '1.4',
      color: 'text',
      textTransform: 'uppercase',
    },
    technologiesUppercaseText: {
      fontWeight: 'regular',
      fontSize: 'xs',
      lineHeight: '1.4',
      color: 'text',
      textAlign: 'justify',
      textTransform: 'uppercase',
    },
    technologiesUppercaseSB24Text: {
      fontWeight: 'bold',
      fontSize: 'sm',
      lineHeight: '1.5',
      color: 'text',
      textTransform: 'uppercase',
    },
    technologiesUppercaseSB36Text: {
      fontWeight: 'semiBold',
      fontSize: 'md',
      lineHeight: '1.5',
      color: 'text',
      textTransform: 'uppercase',
    },
    technologiesUppercaseSB48Text: {
      fontWeight: 'medium',
      fontSize: '4xl',
      lineHeight: '1.5',
      color: 'text',
      textTransform: 'uppercase',
    },
    yachtDetailUppercaseTitleText: {
      fontWeight: 'bold',
      fontSize: 'md',
      lineHeight: '1.5',
      color: 'text',
      textTransform: 'uppercase',
    },
    yachtDetailSemiboldText: {
      fontWeight: 'semiBold',
      fontSize: 'sm',
      lineHeight: '1.1',
      color: 'text',
    },
    yachtDetailRegularText: {
      fontWeight: 'regular',
      fontSize: 'sm',
      lineHeight: '1.2',
      color: 'text',
    },
    yachtDetailUppercaseTitleS48Text: {
      fontWeight: 'medium',
      fontSize: '4xl',
      lineHeight: '1.5',
      color: 'text',
      textTransform: 'uppercase',
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
          fontSize: 'xs',
          fontWeight: 'light',
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
          fontSize: '2xs',
          fontWeight: 'medium',
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
          fontSize: 'md',
          fontWeight: 'medium',
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
          bg: 'gray.200',
          color: 'text',
          borderRadius: '1.5rem',
          fontSize: '2xs',
          fontWeight: 'light',
          textTransform: 'uppercase',
          _hover: {
            bg: 'gray.300',
          },
          _active: {
            bg: 'gray.400',
          },
          _focusVisible: {
            boxShadow: 'none',
            bg: 'gray.300',
          },
        },
        'formButton': {
          bg: 'white',
          color: 'text',
          border: 'thin solid #D7D7D7',
          borderRadius: '0.2rem',
          fontSize: 'xs',
          fontWeight: 'light',
          p: '0.5rem 1rem',
          textTransform: 'uppercase',
          _hover: {
            bg: 'gray.200',
            fontWeight: 'semibold',
          },
          // _active: {
          //   bg: 'white',
          //   fontWeight: 'medium',
          // },
          // _focusVisible: {
          //   boxShadow: 'none',
          //   fontWeight: 'medium',
          //   bg: 'white',
          // },
        },
      }
    },
    Input: {
      variants: {
        outline: {
          color: 'text',
          borderRadius: '0.2rem',
          border: 'thin solid #D7D7D7',
          fontSize: 'xs',
          fontWeight: 'light',
        },
      },
    },
    Modal: {
      sizes: {
        xs: {
          maxW: '20rem',
        }
      }
    }
  },
});
export default themeChakra;