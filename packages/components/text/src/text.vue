<template>
    <component :is="tag" :class="textKls">
        <slot />
    </component>
</template>

<script lang="ts" setup name="SText">
import { ref, computed } from 'vue'
import { textProps } from './text'
import { useNamespace } from '@sakura-ui/hooks'

const props = defineProps(textProps)
const ns = useNamespace('text')
const textKls = computed(() => {
    const { type, size, truncated, multiline } = props
    return [
        ns.b(),
        ns.m(type),
        ns.m(size),
        ns.is('truncated', truncated),
        ns.is('multiline', multiline > 0),
        multiline > 0 && ns.m(`multiline-${ multiline }`)
    ]
})
</script>
