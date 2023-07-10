<template>
    <div
        :class="[
            ns.b(),
            ns.m(size)
        ]"
    >
        <div
            :class="[
                ns.e('wrapper')
            ]"
        >
            11
        </div>
    </div>
</template>
<script lang="ts" setup>
import { inputProps, inputEmits } from './input'
import { useNamespace } from '@sakura-ui/hooks'

const ns = useNamespace('input')
const props = defineProps(inputProps)
const emits = defineEmits(inputEmits)
</script>
<style scoped lang="scss">

</style>