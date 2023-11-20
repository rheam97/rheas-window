import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('../public/banner.jpeg')",
      },
      container: {
        center: true,
      },
      dropShadow: {
        '4xl': [
            '0 0px 5px rgba(0, 0, 0, 0)',
            '5px 5px 15px black'
        ]
      },
      height: {
        'screen': '100svh',
      },
      padding: {
        '67': '67px',
        '1/2': '50%',
        '73': '75%',
        full: '100%',
        over: '149%',
      },
      borderWidth :{
        '70':  '70px',
        '50': '50px',
        '100': '100px',
      }
    },
  },
  plugins: [],
}
export default config
