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
    },
    // 计数器步长
    step: {
        type: Number,
        default: 1
    },
    // 严格步数, 如果使用这个参数则只能输入步进的步数
    stepStrictly: {
        type: Boolean,
        default: false
    },
    // 是否只读
    readonly: {
        type: Boolean,
        default: false
    },
    // 数值精度
    precision: {
        type: Number,
        default: 0
    }
})

export const inputNumberEmits = {
    [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value),
    [CHANGE_EVENT]: (value: number) => isNumber(value)
}

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>
export type InputNumberEmits = ExtractPropTypes<typeof inputNumberEmits>