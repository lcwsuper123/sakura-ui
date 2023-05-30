import { ExtractPropTypes } from 'vue'
import { buildProps, isBoolean, isString, isNumber } from '@sakura-ui/utils'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '@sakura-ui/constants'

export const radioEmits = {
    [UPDATE_MODEL_EVENT]: (value: boolean | string | number) => isBoolean(value) || isString(value) || isNumber(value),
    [CHANGE_EVENT]: (value: boolean | string | number) => isBoolean(value) || isString(value) || isNumber(value),
    [INPUT_EVENT]: (value: boolean | string | number) => isBoolean(value) || isString(value) || isNumber(value)
}
export const radioProps = buildProps({
    // 绑定值
    modelValue: {
        type: [String, Number, Boolean],
        default: ''
    },
    // 单选框的值
    label: {
        type: [String, Number, Boolean],
        default: ''
    },
    // 尺寸
    size: {
        type: String,
        values: ['', 'large', 'small', 'default'],
        default: ''
    },
    // 原始 name 属性
    name: String,
    // 是否禁用
    disabled: Boolean,
    // 是否使用边框
    border: Boolean
})

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = ExtractPropTypes<typeof radioEmits>
