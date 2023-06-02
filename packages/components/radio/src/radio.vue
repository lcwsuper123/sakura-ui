<template>
    <label
        :class="[
            ns.b(),
            ns.m(_size),
            ns.is('checked', _checked),
            ns.is('disabled', _disabled),
            ns.is('bordered', border)
        ]"
    >
       <span
           :class="[
               ns.e('input')
           ]"
       >
           <input
               v-model="modelValue"
               :class="[
                   ns.em('input', 'original')
               ]"
               :value="label"
               type="radio"
               :name="name"
               :disabled="_disabled"
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
import { computed } from 'vue'
import { useNamespace } from '@sakura-ui/hooks'
import { radioProps, radioEmits } from './radio.ts'
import { useRadio } from './use-radio'

const ns = useNamespace('radio')
const props = defineProps(radioProps)
const emits = defineEmits(radioEmits)
const { _checked, modelValue, _disabled, _size } = useRadio(props, emits)
</script>
<style lang="scss" scoped></style>
