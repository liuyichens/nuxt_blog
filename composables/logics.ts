export const isDark = useDark()

export function toggleDark(event: MouseEvent){
    // @ts-ignore
    const isAppearanceTransition = document.startViewTransition &&
        !window.matchMedia('(prefers-reduced-motion: reduced)').matches

    if(!isAppearanceTransition){
        isDark.value = !isDark.value
        return
    }

    const x = event.clientX
    const y = event.clientY

    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    )

    const transition = document.startViewTransition(async () => {
        isDark.value = !isDark.value
        await nextTick()
    })
    

}
