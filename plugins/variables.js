export default defineNuxtPlugin(() => {
    const appConfig = useAppConfig()
    const nuxtApp = useNuxtApp()
    const root = computed(() => {
        return `
            :root {
                --header-height: ${appConfig.ui.variables.header.height};
                ${Object.entries(appConfig.ui.variables.light)
            .map(([key, value]) => `--ui-${key}: ${value};`).join('\n')
        }
            }
            .dark {
                ${Object.entries(appConfig.ui.variables.dark)
            .map(([key, value]) => `--ui-${key}: ${value};`).join('\n')
            }
            }
        `
    })

    const headData = {
        style: [{
            innerHTML: () => root.value,
            tagPriority: -2,
            id: 'ui-variables'
        }]
    }

    if(process.client && nuxtApp.isHydrating && !nuxtApp.payload.serverRendered){
        const style = document.createElement('style')
        style.innerHTML = root.value
        style.setAttribute('data-ui-variables','')
        document.head.appendChild(style)

        headData.script = [{
            innerHTML: 'document.head.removeChild(document.querySelector(\'[data-ui-variables]\'))'
        }]
    }

    useHead(headData)


})
