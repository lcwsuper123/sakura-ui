import { ExtractPropTypes } from 'vue'

import { buildProps, isNumber } from '@sakura-ui/utils'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@sakura-ui/constants'
import { useSizeProp } from '@sakura-ui/hooks'

export const inputNumberProps = buildProps({
    // 选中项绑定值
    modelValue: {
        type: Number
    },
    // 设置计数器允许的最小值
    min: {
        type: Number
    },
    // 设置计数器允许的最大值
    max: {
        type: Number
    },
    // 尺寸
    size: useSizeProp,
    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    }
})

export const inputNumberEmits = {
    [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value),
    [CHANGE_EVENT]: (value: number) => isNumber(value),
}

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>
export type InputNumberEmits = ExtractPropTypes<typeof inputNumberEmits>