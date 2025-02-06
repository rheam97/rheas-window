import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(20) forwards, blink 1.75s steps(20) infinite 2s",
        caret: 'typewriter 2s steps(20) forwards, blink 1.75s steps(20) infinite 2s',
        brighten: 'rise 5s ease-in-out'
      },
      keyframes: {
        typewriter: {
          to: {
            left: '100%'
          },
        
      },
      blink: {
        '0%': {
          opacity: '1',
          background: 'white'
        },
        '0.1%': {
          opacity: '0'
        },
        '50%': {
          opacity: '1',
          background: 'white'
        },
        '50.1%': {
          opacity: '0'
        },
        '100%': {
          opacity: '1',
          background: 'white'
        },
      },
      caret : {
        to: {
          right: '70%'
        }
      },
      rise: {
          '0%' : {
            background: 'black'
          },
          '40%' : {
            background: 'linear-gradient(45deg, black, purple, pink)'
          },
          '60%' : {
            background: 'linear-gradient(90deg, pink, red, orange)',
            color: 'grey'
          },
          '100%' : {
            background: 'linear-gradient(90deg, orange, yellow, blue)',
            color: 'black'

          },

      }
    },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero': "url('../public/banner.jpeg')",
        'menu': "url('../public/menu.png')",
        'rf': "url('../public/restroomfinder.png')",
        'ss': "url('../public/silversocials.png')"
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
      },
      transitionProperty: {
        'filter': 'filter'
      },
      

    },
  },
  plugins: [],
}
export default config
