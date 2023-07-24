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
            <template v-if="prefixIcon">
                <span
                    :class="ns.e('prefix')"
                >
                    <span
                        :class="ns.em('prefix', 'inner')"
                    >
                        <s-icon>
                            <component :is="prefixIcon" />
                        </s-icon>
                    </span>
                </span>
            </template>
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
            <template v-if="suffixIcon">
                <span
                    :class="ns.e('suffix')"
                >
                    <span
                        :class="ns.em('suffix', 'inner')"
                    >
                        <s-icon>
                            <component :is="suffixIcon" />
                        </s-icon>
                    </span>
                </span>
            </template>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { inputProps, inputEmits } from './input'
import { useFormDisabled, useId, useNamespace } from '@sakura-ui/hooks'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import SIcon from '@sakura-ui/components/icon'

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
watch(nativeInputValue, () => setNativeInputValue())
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