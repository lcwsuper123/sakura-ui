<template>
    <div :class="[ns.b('group')]">
        <slot />
    </div>
</template>
<script lang="ts" setup name="SButtonGroup">
import { provide, reactive, toRef } from 'vue'
import { useNamespace } from '@sakura-ui/hooks'
import { buttonGroupContextKey } from './constants'
import { buttonGroupProps } from './button-group'

const ns = useNamespace('button')
const props = defineProps(buttonGroupProps)
provide(buttonGroupContextKey, reactive({
    size: toRef(props, 'size'),
    type: toRef(props, 'type')
}))
</script>
