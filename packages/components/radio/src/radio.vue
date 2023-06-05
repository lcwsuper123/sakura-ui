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
               @change="handleChange"
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
import { nextTick, SetupContext } from 'vue'
import { useNamespace } from '@sakura-ui/hooks'
import { radioProps, radioEmits } from './radio.ts'
import { useRadio } from './use-radio'
import { CHANGE_EVENT } from '@sakura-ui/constants'

const ns = useNamespace('radio')
const props = defineProps(radioProps)
const emits: SetupContext<RadioEmits>['emit'] = defineEmits(radioEmits)
const { _checked, modelValue, _disabled, _size } = useRadio(props, emits)
const handleChange = () => {
    nextTick(() => emits(CHANGE_EVENT, modelValue.value))
}
</script>
<style lang="scss" scoped></style>
