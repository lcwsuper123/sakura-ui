<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('disabled', disabled)
        ]"
    >
        input-number
    </div>
</template>

<script setup lang="ts" name="SInputNumber">
import { useNamespace } from '@sakura-ui/hooks'
import { inputNumberEmits, inputNumberProps } from './input-number'

const props = defineProps(inputNumberProps)
const emits = defineEmits(inputNumberEmits)
const ns = useNamespace('input-number')

</script>

<style lang="scss" scoped></style>