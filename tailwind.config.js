/** @type {import('tailwindcss').Config} */



const colors = require('tailwindcss/colors');



export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            brand: {
                white: '#ffffff',
                black: colors.stone['900'],
                'lightest-grey': colors.stone['50'],
                'light-grey': colors.stone['200'],
            },
        },
        container: {
            center: true,
            padding: '1.5rem',
        },
        screens: {
            xs: '540px',
            sm: '768px',
            md: '1024px',
            lg: '1280px',
            xl: '1536px',
        },
        extend: {}
    },
    plugins: []
};
