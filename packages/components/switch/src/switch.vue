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
        />
        <template v-if="activeText && !inlinePrompt">
            <span
                :class="[
                    ns.e('label'),
                    ns.em('label', 'left'),
                    ns.is('active', !modelValue)
                ]"
            >
                <span>{{ activeText }}</span>
            </span>
        </template>
        <span
            :class="[ns.e('core')]"
            :style="switchCoreWidth"
        >
            <template v-if="inlinePrompt && activeText && inactionText">
                <div
                    :class="[ns.e('inner')]"
                >
                    <span
                        :class="[ns.is('text', true)]"
                        :aria-hidden="!modelValue"
                    >{{ modelValue ? activeText : inactionText }}</span>
                </div>
            </template>
            <div
                :class="[ns.e('action')]"
            ></div>
        </span>
        <template v-if="inactionText && !inlinePrompt">
            <span
                :class="[
                    ns.e('label'),
                    ns.em('label', 'right'),
                    ns.is('active', modelValue)
                ]"
            >
                <span>{{ inactionText }}</span>
            </span>
        </template>
    </div>
</template>
<script lang="ts" setup name="SSwitch">
import { switchProps, switchEmits } from './switch'
import { useNamespace } from '@sakura-ui/hooks'
import { ref, computed } from 'vue'
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
const switchCoreWidth = computed(() => {
    if (!props.width) return {}
    return {
        width: props.width + 'px'
    }
})
</script>
<style lang="scss" scoped>

</style>
