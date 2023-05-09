<template>
    <div :class="[
        ns.b()
    ]">
        switch
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
