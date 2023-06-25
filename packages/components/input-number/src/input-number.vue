<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('disabled', disabled),
        ]"
    >
        <span
            role="button"
            aria-label="crease number"
            :class="[
                ns.e('decrease'),
               !disabled ? ns.is('disabled', decreaseDisabled) : ''
            ]"
            @click="decrease"
        >
            <s-icon
            >
                <minus />
            </s-icon>
        </span>
        <span
            role="button"
            aria-label="crease number"
            :class="[
                ns.e('increase'),
                !disabled ? ns.is('disabled', increaseDisabled) : ''
            ]"
            @click="increase"
        >
            <s-icon
            >
                <plus />
            </s-icon>
        </span>
        <div
            :class="[
                ns.e('wrapper'),
                ns.is('focus', focus)
            ]"
        >
            <input
                :value="displayValue"
                type="number"
                ref="inputRef"
                :class="[
                    ns.e('inner')
                ]"
                :min="min || '-Infinity'"
                :max="max || 'Infinity'"
                :disabled="disabled"
                autocomplete="off"
                tabindex="0"
                role="spinbutton"
                :aria-valuemin="min"
                :aria-valuemax="max"
                :aria-disabled="disabled"
                :aria-valuenow="displayValue"
                :id="inputNumberId"
                @focus="focus = true"
                @blur="focus = false"
                @input="handleInput"
                @change="handleChange"
            />
        </div>
    </div>
</template>

<script setup lang="ts" name="SInputNumber">
import { ref, computed, onMounted, onUpdated, unref, nextTick, reactive } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'
import SIcon from '@sakura-ui/components/icon'
import { useNamespace } from '@sakura-ui/hooks'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import { inputNumberEmits, inputNumberProps } from './input-number'
import { useId } from '@sakura-ui/hooks'
import { isNumber, isString, isUndefined } from '@sakura-ui/utils'
import { isNil } from 'lodash-es'

type TargetElement = HTMLInputElement | HTMLTextAreaElement
type Data = {
    userInput: number | string | null,
    currentValue: number | string
}
const props = defineProps(inputNumberProps)
const emits = defineEmits(inputNumberEmits)
const ns = useNamespace('input-number')
const inputNumberId = useId()
const focus = ref(false)
const inputRef = ref(null)
const data: Data = reactive({
    userInput: null,
    currentValue: props.modelValue
})
// 加是否禁用
const increaseDisabled = computed<boolean>(() => !isUndefined(props.max) && Number(data.currentValue) >= props.max)
// 减是否禁用
const decreaseDisabled = computed<boolean>(() => !isUndefined(props.min) && Number(data.currentValue) <= props.min)
// 初始化
onMounted(() => {
    initData()
})
/**
 * 初始化数据
 */
const initData = () => {
    const { step, stepStrictly } = props
    if (isNaN(Number(data.currentValue))) {
        data.currentValue = stepStrictly ? step : 1
    }
    changeInputProps()
}
const changeInputProps = () => {
    const input = unref(inputRef) as HTMLInputElement
    input.setAttribute('aria-valuenow', String(data.currentValue))
}
/**
 * 效验数据是否符合步数
 * @param value
 */
const validationValue = (value: number): number => {
    const { step } = props
    const remainder: number = value % step
    if (value < step) {
        return step
    }
    if (remainder === 0) {
        return value
    }
    if ((remainder / step * 100) > 50) {
        return value + (step - remainder)
    }
    return value - remainder
}
/**
 * 效验值, 返回符合规则的值
 * @param value
 */
const verifyValue = (value: Data['currentValue']): number => {
    const { min, max, stepStrictly } = props
    if (isString(value)) {
        value = Number(value)
    }
    if (value > max || value < min) {
        value = value > max ? max : min
    }
    if (stepStrictly) {
        value = validationValue(Number(value))
    }
    return Number(value)
}
/**
 * 设置最新的值
 * @param value 新值
 * @param emitChange 是否发送change事件
 */
const setCurrentValue = (value: Data['currentValue'], emitChange: boolean = false) => {
    const oldValue = data.currentValue
    const newValue = verifyValue(value)
    if (!emitChange) {
        return emits(UPDATE_MODEL_EVENT, newValue)
    }
    if (oldValue === newValue) return
    data.userInput = null
    emits(UPDATE_MODEL_EVENT, newValue)
    emits(CHANGE_EVENT, newValue)
    data.currentValue = newValue
}
/**
 * 输入框显示的值
 */
const displayValue = computed<number | string>(() => {
    if (data.userInput !== null) {
        return data.userInput
    }
    let currentValue: string | number | undefined | null = data.currentValue
    if (isNil(currentValue)) return ''
    if (isUndefined(currentValue)) return ''
    if (isNumber(currentValue)) {
        if (Number.isNaN(currentValue)) return ''
    }
    return data.currentValue
})
/**
 * 监听input输入
 * @param e
 */
const handleInput = (e: Event) => {
    const target = e.target as TargetElement
    const value = target.value === '' ? '' : Number(target.value)
    data.userInput = value
    if (isNumber(value) && !Number.isNaN(value) || value === '') {
        setCurrentValue(value, false)
    }
}
/**
 * 输入框改变
 * @param e
 */
const handleChange = (e: Event) => {
    const target = e.target as TargetElement
    const value = target.value === '' ? '' : Number(target.value)
    if (isNumber(value) && !Number.isNaN(value) || value === '') {
        setCurrentValue(value, true)
        data.userInput = null
    }
}
/**
 * 加-步进
 */
const decrease = () => {
    if (unref(decreaseDisabled) || props.disabled) return
    const { step, min } = props
    let value = Number(data.currentValue) - step
    if (min) {
        value = Math.max(value, min)
    }
    setCurrentValue(value, true)
}
/**
 * 减-步进
 */
const increase = () => {
    if (unref(increaseDisabled) || props.disabled) return
    const { step, max } = props
    let value = Number(data.currentValue) + step
    if (max) {
        value = Math.min(value, max)
    }
    setCurrentValue(value, true)
}
</script>

<style lang="scss" scoped></style>