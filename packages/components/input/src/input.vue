<template>
    <div
        :class="[
            type === 'text' ? nsInput.b() : nsTextarea.b(),
            nsInput.m(size),
            nsInput.is('disabled', inputDisabled),
            nsInput.is('focus', isFocus),
            isShowWordLimit ?  (type === 'text' ? nsInput : nsTextarea).is('exceed', inputExceed) : '',
            ($slots.prepend || $slots.append) ? nsInput.e('group') : ''
        ]"
    >
        <template v-if="type === 'text'">

            <template v-if="$slots.prepend">
                <div
                    :class="[nsInput.em('group', 'prepend')]"
                >
                    <slot name="prepend" />
                </div>
            </template>
            <div
                :class="[
                nsInput.e('wrapper'),
            ]"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
            >
                <template v-if="prefixVisible">
                    <span
                        :class="nsInput.e('prefix')"
                    >
                        <span
                            :class="nsInput.em('prefix', 'inner')"
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
                    :class="[nsInput.e('inner')]"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :disabled="inputDisabled"
                    :type="showPassword ? inputType : type"
                    :maxlength="maxlength"
                    :max="max"
                    :min="min"
                    :step="step"
                    @focus="isFocus = true"
                    @blur="isFocus = false"
                    @input="handleInput"
                />
                <template v-if="suffixVisible">
                    <span
                        :class="nsInput.e('suffix')"
                        @click.prevent.stop="suffixClick"
                    >
                    <span
                        :class="nsInput.em('suffix', 'inner')"
                    >
                        <template v-if="suffixIcon || showClearable || isShowPassword">
                            <template v-if="!showClearable && !isShowPassword && suffixIcon">
                                <s-icon>
                                    <component :is="suffixIcon" />
                                </s-icon>
                            </template>
                            <template v-else-if="isShowPassword">
                                 <s-icon>
                                    <component :is="inputType === 'password' ? Hide : View" />
                                </s-icon>
                            </template>
                            <template v-else-if="showClearable">
                                <s-icon>
                                    <component :is="CircleClose" />
                                </s-icon>
                            </template>
                        </template>
                        <template v-if="isShowWordLimit">
                            <span
                                :class="[nsInput.e('count')]"
                            >{{ textlength }} / {{ maxlength }}</span>
                        </template>
                    </span>
                </span>
                </template>
            </div>
            <template v-if="$slots.append">
                <div
                    :class="[nsInput.em('group', 'append')]"
                >
                    <slot name="append" />
                </div>
            </template>
        </template>
        <template v-else>
            <textarea
                v-bind="$attrs"
                :id="inputId"
                ref="inputRef"
                :class="[nsTextarea.e('inner'), nsTextarea.m(size)]"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="inputDisabled"
                :maxlength="maxlength"
                @focus="isFocus = true"
                @blur="isFocus = false"
                @input="handleInput"
            />
            <template v-if="isShowWordLimit">
                <span
                    :class="[nsInput.e('count')]"
                >{{ textlength }} / {{ maxlength }}</span>
            </template>
        </template>
    </div>
</template>
<script lang="ts" setup>
import { computed, nextTick, onMounted, ref, unref, watch } from 'vue'
import type { ComputedRef } from 'vue'
import { inputProps, inputEmits, type InputProps } from './input'
import { useFormDisabled, useId, useNamespace } from '@sakura-ui/hooks'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import SIcon from '@sakura-ui/components/icon'
import { CircleClose, Hide, View } from '@element-plus/icons-vue'

type TargetElement = HTMLInputElement | HTMLTextAreaElement
const nsInput = useNamespace('input')
const nsTextarea = useNamespace('textarea')
const props = defineProps(inputProps)
const emits = defineEmits(inputEmits)
const inputId = useId()
const inputRef = ref<HTMLInputElement>(null)
const isFocus = ref<boolean>(false)
const inputDisabled = useFormDisabled() as ComputedRef<boolean>
// 监听双向绑定的值
const nativeInputValue = computed<string>(() => String(props.modelValue || ''))
const textlength = computed<number>(() => nativeInputValue.value.length)
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
const inputType = ref<string>('password')
// 是否显示password
const isShowPassword = computed<boolean>(() => (
    props.showPassword &&
    !props.suffixIcon &&
    Boolean(unref(nativeInputValue).length) &&
    (unref(isFocus) || unref(isHover))
))
// 是否显示limit
const isShowWordLimit = computed<boolean>(() => (
    (props.type === 'text' || props.type === 'textarea') &&
    !inputDisabled.value &&
    props.maxlength > 0 &&
    !props.readonly &&
    props.showWordLimit
))
const inputExceed = computed<boolean>(() => (
    !!isShowWordLimit.value &&
    textlength.value > props.maxlength
))
const toggleInputType = () => {
    inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
// 清空内容
const clearableValue = async () => {
    setCurrentValue('')
    await nextTick()
    unref(inputRef)?.focus()
}
// 后缀图标按钮点击事件
const suffixClick = () => {
    const { clearable, showPassword } = props
    if (!clearable && !showPassword) return
    clearable && clearableValue()
    showPassword && toggleInputType()
}
// 尾部icon是否显示
const suffixVisible = computed<boolean>(() => (
    !!props.suffixIcon ||
    showClearable.value ||
    isShowPassword.value ||
    isShowWordLimit.value
))
// 头部icon是否显示
const prefixVisible = computed<boolean>(() => (
    !!props.prefixIcon
))
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