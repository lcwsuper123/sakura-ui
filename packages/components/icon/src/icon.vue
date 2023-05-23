<template>
    <i class="s-icon" :style="iconStyle" v-bind="$attrs">
        <slot></slot>
    </i>
</template>
<script setup lang="ts" name="SIcon">
import { computed } from 'vue'
import { iconProps } from './icon'
import { addUnit, isUndefined } from '@sakura-ui/utils'

const props = defineProps(iconProps)
const iconStyle = computed(() => {
    const { size, color } = props
    if (!size && !color) return {}
    return {
        fontSize: isUndefined(size) ? undefined : addUnit(size as number | string),
        '--color': color
    }
})
</script>
