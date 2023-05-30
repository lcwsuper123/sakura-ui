<template>
    <div
        :class="[
            ns.b()]
        "
    >
        <slot />
    </div>
</template>
<script lang="ts" setup name="SRadioGroup">
import { useNamespace } from '@sakura-ui/hooks'
import { radioGroupProps } from './radio-group'

const { parent, proxy } = getCurrentInstance()
const ns = useNamespace('radio-group')
const props = defineProps(radioGroupProps)
</script>
<style lang="scss" scoped>

</style>
