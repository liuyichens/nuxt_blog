export default defineAppConfig({
    ui: {
        primary: 'sky',
        gray: 'cool',
        variables: {
            light: {
                background: '255 255 255',
                foreground: 'var(--color-gray-700)'
            },
            dark: {
                background: 'var(--color-gray-900)',
                foreground: 'var(--color-gray-200)'
            },
            header: {
                height: '3.5rem'
            }
        },
        icons: {
            dark: 'i-heroicons-moon-20-solid',
            light: 'i-heroicons-sun-20-solid',
            system: 'i-heroicons-computer-desktop-20-solid',
            search: 'i-heroicons-magnifying-glass-20-solid',
            external: 'i-heroicons-arrow-up-right-20-solid',
            chevron: 'i-heroicons-chevron-down-20-solid',
            hash: 'i-heroicons-hashtag-20-solid'
        },
        presets: {
            button: {
                rounded: 'rounded-full',
                default: {
                    size: 'md'
                },
                primary: {
                    color: 'white',
                    variant: 'solid'
                },
                secondary: {
                    color: 'gray',
                    variant: 'ghost'
                }
            },
        }
    }
})
