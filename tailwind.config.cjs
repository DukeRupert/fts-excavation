module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Franklin', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        spectra: {
          50: '#f5f7f7',
          100: '#eaeeee',
          200: '#cbd5d6',
          300: '#abbbbd',
          400: '#6d888b',
          500: '#2E5559',
          600: '#294d50',
          700: '#234043',
          800: '#1c3335',
          900: '#172a2c'
        },
        'breaker-bay': {
          50: '#f7fafb',
          100: '#eef5f6',
          200: '#d5e7e9',
          300: '#bbd8db',
          400: '#89bbc1',
          500: '#569EA6',
          600: '#4d8e95',
          700: '#41777d',
          800: '#345f64',
          900: '#2a4d51'
        }
      },
      typography: ({theme}) => ({
        spectra: {
          css: {
            '--tw-prose-body': theme('colors.spectra[800]'),
            '--tw-prose-headings': theme('colors.spectra[900]'),
            '--tw-prose-lead': theme('colors.spectra[700]'),
            '--tw-prose-links': theme('colors.spectra[500]'),
            '--tw-prose-bold': theme('colors.spectra[900]'),
            '--tw-prose-counters': theme('colors.spectra[600]'),
            '--tw-prose-bullets': theme('colors.spectra[400]'),
            '--tw-prose-hr': theme('colors.spectra[300]'),
            '--tw-prose-quotes': theme('colors.spectra[900]'),
            '--tw-prose-quote-borders': theme('colors.spectra[300]'),
            '--tw-prose-captions': theme('colors.spectra[700]'),
            '--tw-prose-code': theme('colors.spectra[900]'),
            '--tw-prose-pre-code': theme('colors.spectra[100]'),
            '--tw-prose-pre-bg': theme('colors.spectra[900]'),
            '--tw-prose-th-borders': theme('colors.spectra[300]'),
            '--tw-prose-td-borders': theme('colors.spectra[200]'),
            '--tw-prose-invert-body': theme('colors.spectra[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.spectra[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.spectra[400]'),
            '--tw-prose-invert-bullets': theme('colors.spectra[600]'),
            '--tw-prose-invert-hr': theme('colors.spectra[700]'),
            '--tw-prose-invert-quotes': theme('colors.spectra[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.spectra[700]'),
            '--tw-prose-invert-captions': theme('colors.spectra[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.spectra[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.spectra[600]'),
            '--tw-prose-invert-td-borders': theme('colors.spectra[700]')
          }
        },
        'breaker-bay': {
          css: {
            '--tw-prose-body': theme('colors.breaker-bay[800]'),
            '--tw-prose-headings': theme('colors.breaker-bay[900]'),
            '--tw-prose-lead': theme('colors.breaker-bay[700]'),
            '--tw-prose-links': theme('colors.breaker-bay[900]'),
            '--tw-prose-bold': theme('colors.breaker-bay[900]'),
            '--tw-prose-counters': theme('colors.breaker-bay[600]'),
            '--tw-prose-bullets': theme('colors.breaker-bay[400]'),
            '--tw-prose-hr': theme('colors.breaker-bay[300]'),
            '--tw-prose-quotes': theme('colors.breaker-bay[900]'),
            '--tw-prose-quote-borders': theme('colors.breaker-bay[300]'),
            '--tw-prose-captions': theme('colors.breaker-bay[700]'),
            '--tw-prose-code': theme('colors.breaker-bay[900]'),
            '--tw-prose-pre-code': theme('colors.breaker-bay[100]'),
            '--tw-prose-pre-bg': theme('colors.breaker-bay[900]'),
            '--tw-prose-th-borders': theme('colors.breaker-bay[300]'),
            '--tw-prose-td-borders': theme('colors.breaker-bay[200]'),
            '--tw-prose-invert-body': theme('colors.breaker-bay[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.breaker-bay[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.breaker-bay[400]'),
            '--tw-prose-invert-bullets': theme('colors.breaker-bay[600]'),
            '--tw-prose-invert-hr': theme('colors.breaker-bay[700]'),
            '--tw-prose-invert-quotes': theme('colors.breaker-bay[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.breaker-bay[700]'),
            '--tw-prose-invert-captions': theme('colors.breaker-bay[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.breaker-bay[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.breaker-bay[600]'),
            '--tw-prose-invert-td-borders': theme('colors.breaker-bay[700]')
          }
        }
      }),
      minHeight: {
        '1/2': '50vh',
        '3/4': '75vh'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
}
