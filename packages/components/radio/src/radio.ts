import { ExtractPropTypes } from 'vue'
import { buildProps, isBoolean, isString, isNumber } from '@sakura-ui/utils'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '@sakura-ui/constants'
import { useSizeProp } from '@sakura-ui/hooks'

export const radioEmits = {
    [UPDATE_MODEL_EVENT]: (value: boolean | string | number) => isBoolean(value) || isString(value) || isNumber(value),
    [CHANGE_EVENT]: (value: boolean | string | number) => isBoolean(value) || isString(value) || isNumber(value)
}
export const radioBaseProps = buildProps({
    // 单选框的值
    label: {
        type: [String, Number, Boolean],
        default: ''
    },
    // 尺寸
    size: useSizeProp,
    // 是否禁用
    disabled: Boolean
})
export const radioProps = buildProps({
    ...radioBaseProps,
    // 绑定值
    modelValue: {
        type: [String, Number, Boolean],
        default: ''
    },
    // 是否使用边框
    border: Boolean,
    // 原始 name 属性
    name: String
})
export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = ExtractPropTypes<typeof radioEmits>
