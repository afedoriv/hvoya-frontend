/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Onest', 'sans-serif'],
            nunito: ['Nunito sans', 'sans-serif'],
        },
        screens: {
            '4xs': '280px',
            '3xs': '320px',
            '2xs': '400px',
            xs: '520px',
            sm: '640px',
            md: '760px',
            lg: '880px',
            xl: '1000px',
            '2xl': '1280px',
            '3xl': '1536px',
        },
        extend: {
            aspectRatio: {
                '1/4': '1 / 4',
                '2/3': '2 / 3',
                '4/5': '4 / 5',
                '7/6': '7 / 6',
                '5/4': '5 / 4',
                '4/3': '4 / 3',
                '3/2': '3 / 2',
                '5/3': '5 / 3',
                '7/4': '7 / 4',
                '2/1': '2 / 1',
                '5/2': '5 / 2',
                '3/1': '3 / 1',
                '4/1': '4 / 1',
            },
            colors: {
                studio: {
                    100: '#ffffff',
                    200: '#5e4d34',
                    300: '#532223',
                    400: '#e4e4e4',
                    500: '#faf6f5',
                    600: '#800000',
                    700: '#7a6908',
                    800: '#3b714c',
                    900: '#754e4f',
                    950: '#1c1917',
                },
            },
            height: {
                screen: '100dvh',
            },
            width: {
                screen: '100dvw',
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                ':root': {
                    '--font-nunito': theme('fontFamily.nunito'),
                    '--color-studio-200': theme('colors.studio.200'),
                    '--color-studio-300': theme('colors.studio.300'),
                    '--color-studio-500': theme('colors.studio.500'),
                    '--color-studio-950': theme('colors.studio.950'),
                },
            });
        }),
    ],
};
