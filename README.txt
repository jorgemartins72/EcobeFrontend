Tailwind
- npx nuxi@latest module add tailwindcss
- npx tailwindcss init
- criar './assets/css/tailwind.css' e configurar no nuxt.config.ts css: ['./assets/css/tailwind.css']
  - colocar o código abaixo:

      @tailwind base;
      @tailwind components;
      @tailwind utilities;

      @layer components {
        .json-debug {
          @apply text-[10px] leading-none
        }
      }

- tailwind.config.js
  - inserir o content:

      content: [
        "./components/**/*.{js,vue,ts}",
        './components/**/*.{html,js}',
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        './pages/**/*.{html,js}',
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
        './public/index.html',
        './src/**/*.{html,js}'
      ],

- install google-fonts:
  - npx nuxi@latest module add google-fonts
  - configurar no nuxt.config.ts o código abaixo

      googleFonts: {
        display: 'swap',
        prefetch: true,
        preconnect: false,
        preload: true,
        useStylesheet: true,
        families: {
          'Roboto+Condensed': [100, 300, 400, 700],
          Roboto: [100, 300, 400, 700],
          Geist: [100, 400, 600, 800, 900]
        }
      }

- install nuxt fonts:
  - npx nuxi@latest module add fonts
  - configurar no nuxt.config.ts o código abaixo

    fonts: {
      families: [
        { name: 'Geist', provider: 'google' },
      ],
      defaults: {
        'sans-serif': ['Geist', 'Helvetica', 'Helvetica Neue', 'Roboto'],
        'system-ui': [
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Helvetica Neue',
          'Arial',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'
        ],
        'ui-sans-serif': ['Arial']
      }
    }

  - configurar no tailwind.config.js

    theme: {
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'serif'],
          robotoc: ['Roboto Condensed', 'sans-serif'],
          geologica: ['Geologica', 'sans-serif'],
          sans: ['Geist', 'Roboto', 'Helvetica', 'Arial', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
        }
      }
    }

- instalar UI Thing
  - npx ui-thing@latest init