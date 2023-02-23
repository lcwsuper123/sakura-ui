<template>
    <i class="xbb-icon" :style="style">
        <slot></slot>
    </i>
</template>
<script lang="ts">
export default {
    name: 'sakuraIcon'
}
</script>
<script setup lang="ts">
import { computed, defineComponent } from 'vue'
// import { IconProps } from './icon.ts'
// const props = defineProps<IconProps>()
// const style = computed(() => {
//     if (!props.size && !props.color) {
//         return {}
//     }
//     const style = {
//         ...(props.size ? { 'font-size': props.size + 'px' } : {}),
//         ...(props.color ? { 'color': props.color } : {}),
//     }
//     console.log('style', style)
//     return style
// })
</script>