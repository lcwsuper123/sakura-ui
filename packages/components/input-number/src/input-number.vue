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
                ns.is('disabled', decreaseDisabled)
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
                ns.is('disabled', increaseDisabled)
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
                :value="data.current"
                ref="inputRef"
                :class="[
                    ns.e('inner')
                ]"
                :min="String(min)"
                :max="String(max)"
                autocomplete="off"
                tabindex="0"
                role="spinbutton"
                :aria-valuemin="min"
                :aria-valuemax="max"
                :aria-disabled="disabled"
                :aria-valuenow="modelValue"
                :id="inputNumberId"
                @focus="focus = true"
                @blur="focus = false"
                @input="handleInput"
                type="number"
            />
        </div>
    </div>
</template>

<script setup lang="ts" name="SInputNumber">
import { ref, computed, onMounted, onUpdated, unref, nextTick, reactive } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'
import SIcon from '@sakura-ui/components/icon'
import { useNamespace } from '@sakura-ui/hooks'
import { UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import { inputNumberEmits, inputNumberProps } from './input-number'
import { useId } from '@sakura-ui/hooks'
import { isUndefined } from '@sakura-ui/utils'

type TargetElement = HTMLInputElement | HTMLTextAreaElement
type Data = {
    current: number | string
}
const props = defineProps(inputNumberProps)
const emits = defineEmits(inputNumberEmits)
const ns = useNamespace('input-number')
const inputNumberId = useId()
const focus = ref(false)
const inputRef = ref(null)
const data: Data = reactive({
    current: props.modelValue
})
// 加是否禁用
const increaseDisabled = computed<boolean>(() => !isUndefined(props.max) && data.current >= props.max)
// 减是否禁用
const decreaseDisabled = computed<boolean>(() => !isUndefined(props.min) && data.current <= props.min)
// 初始化
onMounted(() => {
    initData()
})
const initData = () => {
    const input = unref(inputRef) as HTMLInputElement
    if (isNaN(Number(data.current))) {
        data.current = 1
    }
    input.setAttribute('aria-valuenow', String(data.current))
    input.setAttribute('value', String(data.current))
}
// 设置最新的值
const setCurrentValue = (value: number) => {
    if (data.current === value) return
    const { max, min } = props
    if (value > max) {
        value = max
    } else if (value < min) {
        value = min
    }
    emits(UPDATE_MODEL_EVENT, Number(value))
    data.current = value
}
// 监听input输入
const handleInput = (e: Event) => {
    const target = e.target as TargetElement
    let value = Number(target.value)
    setCurrentValue(value)
}
const decrease = () => {
    if (unref(decreaseDisabled)) return
    const { step, min } = props
    let value = data.current - step
    if (min) {
        value = Math.max(value, min)
    }
    setCurrentValue(value)
}
const increase = () => {
    if (unref(increaseDisabled)) return
    const { step, max } = props
    let value = data.current + step
    if (max) {
        value = Math.min(value, max)
    }
    setCurrentValue(value)
}
</script>

<style lang="scss" scoped></style>