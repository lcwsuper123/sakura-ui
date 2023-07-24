<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('disabled', inputDisabled)
        ]"
    >
        <div
            :class="[
                ns.e('wrapper'),
                ns.is('focus', isFocus)
            ]"
        >
            <input
                v-bind="$attrs"
                :id="inputId"
                ref="inputRef"
                :class="[ns.e('inner')]"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="inputDisabled"
                @focus="isFocus = true"
                @blur="isFocus = false"
                @input="handleInput"
            />
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { inputProps, inputEmits } from './input'
import { useFormDisabled, useId, useNamespace } from '@sakura-ui/hooks'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'

type TargetElement = HTMLInputElement | HTMLTextAreaElement
const ns = useNamespace('input')
const props = defineProps(inputProps)
const emits = defineEmits(inputEmits)
const inputId = useId()
const inputRef = ref<HTMLInputElement>(null)
const isFocus = ref<boolean>(false)
const inputDisabled = useFormDisabled()
const nativeInputValue = computed(() => props.modelValue ? props.modelValue : '')
const setNativeInputValue = () => {
    const _input = inputRef.value
    if (!_input || _input.value === nativeInputValue.value) return
    _input.value = nativeInputValue.value
}
onMounted(() => {
    setNativeInputValue()
})
const handleInput = async (event: Event) => {
    let { value } = event.target as TargetElement
    if (value === nativeInputValue.value) return
    emits(UPDATE_MODEL_EVENT, value)
    emits(CHANGE_EVENT, value)
    await nextTick()
    setNativeInputValue()
}
</script>
<style scoped lang="scss">
</style>