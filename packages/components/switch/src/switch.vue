<template>
    <div :class="[
        ns.b(),
        ns.m(size)
    ]">
        <div
            :class="[ns.e('core')]"
        >
            <span
                :class="[ns.e('action')]"
            ></span>
        </div>
    </div>
</template>
<script lang="ts" setup name="SSwitch">
import { switchProps } from './switch'
import { useNamespace } from '@sakura-ui/hooks'

const props = defineProps(switchProps)
const ns = useNamespace('switch')
</script>
<style lang="scss" scoped>

</style>
