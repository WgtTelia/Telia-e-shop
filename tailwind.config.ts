import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config = {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        screens: {
            xs: '375px',
            sm: '576px',
            md: '768px',
            lg: '876px',
            xl: '1440px',
            xxl: '1920px',
        },
        container: {
            center: true,
            screens: {
                lg: '1440px',
            },
        },
        extend: {
            fontSize: {
                'hero-title': '2rem',
                'hero-title-md': '2.625rem',
                'hero-title-lg': '3rem',
                'modal-title': '1.75rem',
            },
            fontFamily: {
                sans: ['var(--font-helvetica-neue)', ...fontFamily.sans],
            },
            padding: {
                'main-content': '2.5rem 1rem 4rem',
                'main-content-md': '2.5rem 1.5rem 5rem',
                'main-content-lg': '3rem 3rem 6rem',
                'dropdown-label': '1.094rem',
            },
            colors: {
                primary: '#4E0174', // for main CTA button and radio buttons
                'primary-light': '#6D02A3', // for filters
                'primary-dark': '#29003E', // close and results button, CTA in order modal
                'primary-active': '#E4B6FB', // filters and sort active
                'gray-950': '#464847', // sheet header and sheet title name
                'grey-900': '#313132', // for price text and model name
                'gray-750': '#333333', // Radio-button sort text
                'gray-700': '#8F8F8F', // Radio-button border
                'grey-800': '#5D5D5F', // for brand names
                'grey-400': '#222222', //for input text
                'grey-300': '#7A7A7A', //for input outline
                'gray-850': '#4E4E4D', //for the SortDropdown check-mark
                'gray-800': '#585757', //for SortDropdown active-border and icon colors
                'gray-650': '#868685', // for SortDropdown background
                'gray-600': '#707071', // for  selected btn background  in the sheet
                'grey-200': '#D6D6D6', // for card outline
                'grey-100': '#F5F5FA', // for card background
                'grey-50': '#C3C3C2', // for the SortDropdown title
                success: '#02562B', //in stock color
                'success-medium': '#018842', //success text
                'success-light': '#C5EFD9', //in stock, halo color
                warning: '#FFA500', //low stock color
                'warning-light': '#FFF2CC', //low stock, halo color
                danger: '#980233', //out of stock color
                'danger-medium': '#BE0040', //error text
                'danger-light': '#FFDDE8', //out of stock, halo color,
                'error-medium': '#E4175C', // technical error icon
                'error-strong': '#980233', //technical error text
                'off-black': '#1E1E20', //for the modal X and header
            },
            backgroundImage: {
                'sheet-gradient':
                    'linear-gradient(180deg, #7A7A7A 0%, #4A4A4A 100%)',
            },
            width: {
                'image-container': '300px',
                'card-img-width': '100px',
                'form-container': 'calc(100%-image-container)',
            },
            maxWidth: {
                'dialog-content': '888px',
                'btn-order': '156px',
            },
            height: {
                'card-img-height': '116px',
            },
            minHeight: {
                'card-description': '96px',
            },
            minWidth: {
                'dropdown-min': '296px',
            },
            maxHeight: {
                'dialog-content': '640px',
            },
            gridTemplateColumns: {
                'main-app': '1fr 4fr',
            },
            borderWidth: {
                DEFAULT: '1px',
                '0': '0',
                '2': '2px',
                '3': '3px',
                '4': '4px',
                '6': '6px',
                '8': '8px',
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
