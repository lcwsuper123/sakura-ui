<template>
    <label
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('checked', false),
            ns.is('disabled', disabled)
        ]"
    >
       <span
           :class="[
               ns.e('input')
           ]"
       >
           <input
               :class="[
                   ns.em('input', 'original')
               ]"
               type="radio"
               :name="name"
               :disabled="disabled"
           />
            <span
                :class="[
                    ns.em('input', 'inner')
                ]"
            ></span>
       </span>
        <span
            :class="[
                ns.e('label')
            ]"
        >
            <slot />
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
