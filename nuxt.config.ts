// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    modules: ['@nuxt/content', 'nuxt-og-image', '@vueuse/nuxt'],
    site: {
        url: 'https://example.com'
    },
    content: {
        highlight: {
            theme: {
                light: 'vitesse-light',
                default: 'vitesse-light',
                dark: 'vitesse-dark'
            },
            preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
        },
        navigation: {
            fields: ['icon', 'to', 'target']
        }
    },
    css: [
        '~/assets/css/main.css',
        '~/assets/css/scrollbars.css',
        '~/assets/css/prose.css',
        '~/assets/css/fonts.css',
        '~/assets/css/harmonyos_sans.css',
        'aos/dist/aos.css'
    ],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': 'postcss-nesting',
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
