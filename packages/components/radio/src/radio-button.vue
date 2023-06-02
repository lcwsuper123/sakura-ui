<template>
    <label
        :class="[
            ns.b('button'),
            ns.bm('button', _size),
            ns.is('checked', _checked),
            ns.is('disabled', _disabled),
        ]"
        :style="checkedStyle"
    >
        <input
            v-model="modelValue"
            :class="[ns.bem('button', 'original', 'input')]"
            :name="name"
            :value="label"
            type="radio"
            :disabled="_disabled"
        />
        <span
            :class="[ns.be('button','inner')]"
        >
            <slot />
        </span>
    </label>
</template>
<script lang="ts" setup name="SRadioButton">
import { computed } from 'vue'
import { useNamespace } from '@sakura-ui/hooks'
import { radioButtonEmits, radioButtonProps } from './radio-button'
import { useRadio } from './use-radio'

const ns = useNamespace('radio')
const props = defineProps(radioButtonProps)
const emits = defineEmits(radioButtonEmits)
const { _size, _disabled, _checked, isGroup, radioGroup, modelValue } = useRadio(props, emits)
const checkedStyle = computed(() => {
    const fill = isGroup.value ? radioGroup.fill : ''
    const textColor = isGroup.value ? radioGroup.textColor : ''
    return ns.cssBlockVar('radio', {
        'button-checked-text-color': textColor,
        'button-checked-bg-color': fill,
        'button-checked-border-color': fill
    })
})
</script>
<style lang="scss" scoped>

</style>
