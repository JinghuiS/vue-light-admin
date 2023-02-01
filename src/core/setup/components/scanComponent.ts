import type { App, Component } from 'vue'

export function scanComponents(components: Component[], app: App) {
    return components.forEach((item) => {
        //@ts-ignore
        app.component(item.name, item)
    })
}
