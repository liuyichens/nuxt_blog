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
                height: '4rem'
            }
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
