<template>
    <label
        :class="[
            ns.b(),
            ns.m(size)
        ]"
    >
       <span
           :class="[
               ns.e('input')
           ]"
       >
            <span
                :class="[
                    ns.em('input', 'inner')
                ]"
            ></span>
       </span>
    </label>
</template>
<script setup lang="ts" name="SRadio">
import { useNamespace } from '@sakura-ui/hooks'
import { radioProps, radioEmits } from './radio.ts'

const ns = useNamespace('radio')
const props = defineProps(radioProps)
const emits = defineEmits(radioEmits)
</script>
<style lang="scss" scoped></style>
