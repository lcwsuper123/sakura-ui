<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('checked', modelValue),
            ns.is('disabled', disabled)
        ]"
        @click.prevent="switchValue"
    >
        <input
            ref="inputRef"
            :class="[ns.e('input')]"
            type="checkbox"
            role="switch"
            true
        />
        <span
            :class="[ns.e('core')]"
        >
            <div
                :class="[ns.e('action')]"
            ></div>
        </span>
    </div>
</template>
<script lang="ts" setup name="SSwitch">
import { switchProps, switchEmits } from './switch'
import { useNamespace } from '@sakura-ui/hooks'
import { ref } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT, INPUT_EVENT } from '@sakura-ui/constants'

const props = defineProps(switchProps)
const emits = defineEmits(switchEmits)
const ns = useNamespace('switch')
const inputRef = ref<HTMLInputElement>()
const handleChange = () => {
    const { activeValue, inactiveValue, modelValue } = props
    const value = modelValue ? inactiveValue : activeValue
    emits(UPDATE_MODEL_EVENT, value)
    emits(CHANGE_EVENT, value)
    emits(INPUT_EVENT, value)
}
const switchValue = () => {
    if (props.disabled) return
    handleChange()
}
</script>
<style lang="scss" scoped>

</style>
