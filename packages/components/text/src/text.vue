<template>
    <component :is="tag" :class="textKls">
        <slot />
    </component>
</template>

<script lang="ts" setup name="SText">
import { ref, computed } from 'vue'
import { textProps } from './text'
import { useNamespace } from '@sakura-ui/hooks/index'

const props = defineProps(textProps)
const ns = useNamespace('text')
const textKls = computed(() => {
    return [ns.b(), ns.m(props.type), ns.m(props.size), ns.is('truncated', props.truncated)]
})
// console.log(ns.is('loading', true))
// console.log(ns.cssVar({
//     'background': 'pink',
//     'borderRadius': '24px'
// }))
// console.log(ns.cssBlockVar('text', {
//     'background': 'pink',
//     'borderRadius': '24px'
// }))
</script>
