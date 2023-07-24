<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('disabled', disabled)
        ]"
    >
        <div
            :class="[
                ns.e('wrapper'),
                ns.is('focus', isFocus)
            ]"
        >
            <input
                :class="[ns.e('inner')]"
                :placeholder="placeholder"
                :disabled="disabled"
                @focus="isFocus = true"
                @blur="isFocus = false"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { inputProps, inputEmits } from './input'
import { useNamespace } from '@sakura-ui/hooks'

const ns = useNamespace('input')
const props = defineProps(inputProps)
const emits = defineEmits(inputEmits)
const isFocus = ref<boolean>(false)
</script>
<style scoped lang="scss">
</style>