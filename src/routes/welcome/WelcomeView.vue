<template>
    <div class="flex items-center gap-6">
        <div>{{ $t('test.name') }}👏🏻</div>

        <Dropdown
            v-model="selectedLang"
            :options="langs"
            optionLabel="name"
            placeholder="Select a Lang"
            @change="changeLanguage"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18nService } from '@/i18n/i18n.service'
import { useI18n } from 'vue-i18n'

// ------------ i18n --------------- //
const selectedLang = ref<string>()
const langs = [
    { name: '中文', code: 'zh-CN' },
    { name: 'English', code: 'en-US' }
]

const { setLang } = useI18nService()
const { locale } = useI18n()

const changeLanguage = (lang: any) => {
    setLang(lang.value.code)
    locale.value = lang.value.code
}
// ------------ i18n --------------- //
</script>
