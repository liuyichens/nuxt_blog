export const isDark = useDark()

export function toggleDark(event: MouseEvent) {
    // @ts-ignore
    const isAppearanceTransition = document.startViewTransition &&
        !window.matchMedia('(prefers-reduced-motion: reduced)').matches

    if (!isAppearanceTransition) {
        isDark.value = !isDark.value
        return
    }

    const x = event.clientX
    const y = event.clientY

    const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    )

    // @ts-ignore
    const transition = document.startViewTransition(async () => {
        isDark.value = !isDark.value
        await nextTick()
    })

    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
        ]

        document.documentElement.animate({
            clipPath: isDark.value
                ? [...clipPath].reverse()
                : clipPath
        }, {
            duration: 400,
            easing: 'ease-in-out',
            pseudoElement: isDark.value
                ? '::view-transition-old(root)'
                : '::view-transition-new(root)'
        })

    })

}
