<template>
    <label
        :class="[
            ns.b(),
            ns.is('checked', checked),
            ns.is('disabled', disabled)
        ]"
    >
        <input
            :class="[ns.em('original', 'input')]"
            :name="name"
            :value="label"
            type="radio"
            :disabled="disabled"
        />
        <span
            :class="[ns.e('inner')]"
        >
            <slot />
        </span>
    </label>
</template>
<script lang="ts" setup name="SRadioButton">
import { useNamespace } from '@sakura-ui/hooks'
import { radioButtonProps } from './radio-button'

const ns = useNamespace('radio-button')
const props = defineProps(radioButtonProps)
</script>
<style lang="scss" scoped>

</style>
