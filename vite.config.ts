import { fileURLToPath, URL } from 'node:url'
import VueMacros from 'unplugin-vue-macros/vite'
import UnoCSS from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import transformerDirectives from '@unocss/transformer-directives'

import AutoImport from 'unplugin-auto-import/vite'

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
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                'vue-i18n',
                'vue/macros',
                '@vueuse/core',
                {
                    vdi: ['useDependency', 'onProvider', 'vdi']
                },
                {
                    'vue-modal-provider': [
                        'useModal',
                        'useModalRef',
                        'ModalProvider',
                        'ModalContext'
                    ]
                }
            ],
            dts: 'src/auto-imports.d.ts',
            dirs: ['src/shared', 'src/shared/utils', 'src/core'],
            vueTemplate: true
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
                //@ts-ignore
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
