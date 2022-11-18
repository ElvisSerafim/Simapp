import {extendTheme } from 'native-base';

export const theme = extendTheme({
    colors: {
      primary: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
      },
      fontConfig: {
        Roboto: {
          100: {
            normal: "Roboto-Light",
            italic: "Roboto-LightItalic",
          },
          200: {
            normal: "Roboto-Light",
            italic: "Roboto-LightItalic",
          },
          300: {
            normal: "Roboto-Light",
            italic: "Roboto-LightItalic",
          },
          400: {
            normal: "Roboto-Regular",
            italic: "Roboto-Italic",
          },
          500: {
            normal: "Roboto-Medium",
          },
          600: {
            normal: "Roboto-Medium",
            italic: "Roboto-MediumItalic",
          },
          700: {
            normal: 'Roboto-Bold',
          },
          800: {
            normal: 'Roboto-Bold',
            italic: 'Roboto-BoldItalic',
          },
          900: {
            normal: 'Roboto-Bold',
            italic: 'Roboto-BoldItalic',
          },
        },
      },    
      fonts: {
        heading: "Roboto",
        body: "Roboto",
        mono: "Roboto",
      },
    },
    config: {
      initialColorMode: 'dark',
    },
  });