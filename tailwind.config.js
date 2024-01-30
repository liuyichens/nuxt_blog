/** @type {import('tailwindcss').Config} */
import tailwindTypography from '@tailwindcss/typography'

export default {
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  blocklist: [
    '[html:has(&)]:bg-blue-500',
    'list-image-[url(checkmark.png)]',
    'list-image-[url(carrot.png)]'
  ],
  darkMode: 'class',
  theme: {
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      colors: {
        code: {
          highlight: 'rgb(125 211 252 / 0.1)',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: 'var(--color-text-regular)',
            hr: {
              borderColor: theme('colors.slate。100'),
              marginTop: '3em',
              marginBottom: '3em'
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              marginBottom: `${16 / 24}em`,
              borderLeft: '3px solid var(--color-primary)',
              paddingLeft: '15px'
            },
            h3: {
              position: 'relative',
              marginTop: '2.4em',
              lineHeight: '1.4',
            },
            'h3::before': {
              content: '""',
              position: 'absolute',
              left: '0',
              bottom: '-1px',
              height: '3px',
              backgroundColor: 'var(--color-primary)',
              width: '40px'
            },
            h4: {
              marginTop: '2em',
              fontSize: '1.125em'
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: 'var(--color-text-primary)'
            },
            'h2 a, h3 a, h4 a': {
              borderBottom: 'none'
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              ...theme('fontSize.lg')[1],
              color: 'var(--color-text-primary)'
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              ...theme('fontSize.base')[1],
              color: 'var(--color-text-primary)'
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              ...theme('fontSize.sm')[1],
              color: 'var(--color-text-regular)'
            },
            'h2, h3, h4': {
              'scroll-margin-top': 'var(--scroll-mt)'
            },
            'h2 code, h3 code': {
              font: 'inherit'
            },
            ul: {
              listStyle: 'none',
              paddingLeft: 0,
            },
            'ul > li': {
              position: 'relative',
              paddingLeft: '1.75em'
            },
            'ul > li::before': {
              content: '""',
              width: '0.75em',
              height: '0.125em',
              position: 'absolute',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: '999px',
              backgroundColor: theme('colors.slate.300'),
            },
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid var(--color-primary)`
            },
            'a:hover': {
              borderBottomWidth: '2px'
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit'
            },
            strong: {
              color: theme('colors.slate.900'),
              fontWeight: 'inherit',
            },
            'a strong': {
              color: theme('colors.slate.900'),
              fontWeight: 'inherit'
            },
            kbd: {
              background: theme('colors.slate.100'),
              borderWidth: '1px',
              borderColor: theme('colors.slate.200'),
              padding: '0.125em 0.25em',
              color: theme('colors.slate.700'),
              fontWeight: 500,
              fontSize: '0.875em',
              fontVariantLigatures: 'none',
              borderRadius: '4px',
              margin: '0 1px'
            },
            code: {
              fontWeight: theme('fontWeight.medium'),
              fontVariantLigatures: 'none'
            },
            pre: {
              color: theme('colors.slate.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%'
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight
            },
            thead: {
              color: theme('colors.slate.700'),
              borderBottomColor: theme('colors.slate.200')
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold')
            },
            'tbody tr': {
              borderBottomColor: theme('colors.slate.100')
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px'
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0]
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic',
            },
            'figure > figcaption': {
              marginTop: `${12 / 14}em`
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.slate.400'),
            hr: {
              borderColor: theme('colors.slate。200'),
              opacity: '0.05'
            },
            'h2 small, h3 small, h4 small': {
              color: theme('colors.slate.400')
            },
            'h2, h3, h4, thead th': {
              color: theme('colors.slate.200')
            },
            a: {
              color: theme('colors.white'),
              borderBottomColor: `var(--color-primary)`
            },
            kbd: {
              background: theme('colors.slate.700'),
              borderColor: theme('colors.slate.600'),
              color: theme('colors.slate.200'),
            },
            code: {
              color: theme('colors.slate.200')
            },
            pre: {
              boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
            },
            strong: {
              color: theme('colors.slate.200')
            },
            thead: {
              color: theme('colors.slate.300'),
              borderBottomColor: 'rgb(148 163 184 / 0.2)'
            },
            'tbody tr': {
              borderBottomColor: 'rgb(148 163 184 / 0.1)'
            },
            blockQuote: {
              color: theme('colors.white')
            }
          }
        }
      })
    },
  },
  plugins: [],
}

