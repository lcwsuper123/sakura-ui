import type { ExtractPropTypes } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import { componentSizes } from '@sakura-ui/constants'
import { buildProps, IconPropType, isBoolean, isNumber, isString } from '@sakura-ui/utils'

export const inputProps = buildProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    size: {
        type: String,
        values: componentSizes,
        default: ''
    },
    placeholder: String,
    // 是否禁用
    disabled: Boolean,
    // 是否只读
    readonly: Boolean,
    // 是否显示清除按钮只有当type不为textarea时启用
    clearable: Boolean,
    // 前置图标
    prefixIcon: {
        type: IconPropType,
        default: ''
    },
    // 后置图标
    suffixIcon: {
        type: IconPropType,
        default: ''
    },
    // 指定输入值的格式。(只有当 type 是"text"时才能工作)
    formatter: Function,
    // 指定输入值的格式。(只有当 type 是"text"时才能工作)
    parser: Function,
    // 是否显示切换密码图标
    showPassword: Boolean,
    // 显示输入长度限制
    showWordLimit: Boolean,
    // 最大长度
    maxlength: {
        type: Number,
        default: -1
    },
    // 原生 autocomplete 属性
    autocomplete: {
        type: String,
        default: 'off'
    },
    // 等价于原生 input name 属性
    name: String,
    max: {
        type: [String, Number]
    },
    min: {
        type: [String, Number]
    },
    step: {
        type: [String, Number]
    },
    type: {
        type: String,
        values: ['text', 'textarea'],
        default: 'text'
    }
})

export const inputEmits = {
    [UPDATE_MODEL_EVENT]: (value: string | number | boolean) => isString(value) || isNumber(value) || isBoolean(value),
    [CHANGE_EVENT]: (value: string | number | boolean) => isString(value) || isNumber(value) || isBoolean(value)
}


export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = ExtractPropTypes<typeof inputEmits>