import type { ExtractPropTypes } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import { componentSizes } from '@sakura-ui/constants'
import { buildProps, IconPropType, isBoolean, isNumber, isString } from '@sakura-ui/utils'

export const inputProps = buildProps({
    modelValue: {
        type: [String, Number, Boolean],
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
    }
})

export const inputEmits = {
    [UPDATE_MODEL_EVENT]: (value: string | number | boolean) => isString(value) || isNumber(value) || isBoolean(value),
    [CHANGE_EVENT]: (value: string | number | boolean) => isString(value) || isNumber(value) || isBoolean(value)
}


export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = ExtractPropTypes<typeof inputEmits>