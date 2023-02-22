import { fileURLToPath, URL } from 'node:url'
import VueMacros from 'unplugin-vue-macros/vite'
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Markdown from 'vite-plugin-vue-markdown'

import Shiki from 'markdown-it-shiki'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        VueMacros({
            betterDefine: true,
            plugins: {
                vue: vue({
                    include: [/\.vue$/, /\.md$/] // <--
                }),
                vueJsx: vueJsx() // if needed
            }
        }),
        Markdown({
            markdownItOptions: {
                html: true,
                linkify: true,
                typographer: true
            },
            markdownItSetup(md) {
                md.use(Shiki, {
                    theme: 'github-light'
                })
            },
            wrapperClasses: 'prose prose-sm m-auto text-left'
        }),
        UnoCSS({
            transformers: [transformerDirectives()],
            presets: [
                //@ts-ignore
                presetIcons({}),
                presetUno()
                // ...other presets
            ]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
            '@shared': fileURLToPath(new URL('./src/shared', import.meta.url))
        }
    }
})
