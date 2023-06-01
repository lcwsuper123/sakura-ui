<template>
    <label
        :class="[
            ns.b('button'),
            ns.bm('button', _size),
            ns.is('checked', _checked),
            ns.is('disabled', _disabled),
        ]"
        @click="isGroup ? radioGroup.changeEvent(label) : ''"
    >
        <input
            :class="[ns.bem('button', 'original', 'input')]"
            :name="name"
            :value="label"
            type="radio"
            :disabled="disabled"
        />
        <span
            :class="[ns.be('button','inner')]"
        >
            <slot />
        </span>
    </label>
</template>
<script lang="ts" setup name="SRadioButton">
import { useNamespace } from '@sakura-ui/hooks'
import { radioButtonProps } from './radio-button'
import { useRadio } from './use-radio'

const ns = useNamespace('radio')
const props = defineProps(radioButtonProps)
const { _size, _disabled, _checked, isGroup, radioGroup } = useRadio(props)
</script>
<style lang="scss" scoped>

</style>
