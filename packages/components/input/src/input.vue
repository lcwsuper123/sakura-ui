<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('disabled', inputDisabled),
            ns.is('focus', isFocus)
        ]"
    >
        <div
            :class="[
                ns.e('wrapper'),
            ]"
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
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
            <template v-if="suffixIcon || showClearable">
                <span
                    :class="ns.e('suffix')"
                    @click.prevent.stop="clearableValue"
                >
                    <span
                        :class="ns.em('suffix', 'inner')"
                    >
                        <template v-if="!showClearable && suffixIcon">
                            <s-icon>
                                <component :is="suffixIcon" />
                            </s-icon>
                        </template>
                        <template v-else>
                             <s-icon>
                                <component :is="CircleClose" />
                            </s-icon>
                        </template>
                    </span>
                </span>
            </template>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, unref, watch } from 'vue'
import type { ComputedRef } from 'vue'
import { inputProps, inputEmits, type InputProps } from './input'
import { useFormDisabled, useId, useNamespace } from '@sakura-ui/hooks'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import SIcon from '@sakura-ui/components/icon'
import { CircleClose } from '@element-plus/icons-vue'

type TargetElement = HTMLInputElement | HTMLTextAreaElement
const ns = useNamespace('input')
const props = defineProps(inputProps)
const emits = defineEmits(inputEmits)
const inputId = useId()
const inputRef = ref<HTMLInputElement>(null)
const isFocus = ref<boolean>(false)
const inputDisabled = useFormDisabled() as ComputedRef<boolean>
// 监听双向绑定的值
const nativeInputValue = computed<string>(() => String(props.modelValue || ''))
const setNativeInputValue = () => {
    const _input = inputRef.value
    if (!_input || _input.value === nativeInputValue.value) return
    _input.value = String(nativeInputValue.value)
}
onMounted(() => {
    setNativeInputValue()
})
// 监听值变化
watch(nativeInputValue, () => setNativeInputValue())
const isHover = ref<boolean>(false)
// 是否显示clearable
const showClearable = computed<boolean>(() => (
    props.clearable &&
    !props.suffixIcon &&
    Boolean(unref(nativeInputValue).length) &&
    (unref(isFocus) || unref(isHover))
))
// 清空内容
const clearableValue = async () => {
    setCurrentValue('')
    await nextTick()
    unref(inputRef)?.focus()
}
const setCurrentValue = (value: InputProps['modelValue']) => {
    emits(UPDATE_MODEL_EVENT, value)
    emits(CHANGE_EVENT, value)
}
const handleInput = async (event: Event) => {
    let { value } = event.target as TargetElement
    if (value === nativeInputValue.value) return
    const { formatter, parser } = props
    if (formatter) {
        value = parser ? parser(value) : value
        value = formatter(value)
    }
    setCurrentValue(value)
    await nextTick()
    setNativeInputValue()
}
</script>
<style scoped lang="scss">
</style>