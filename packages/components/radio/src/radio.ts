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
        default: false
    },
    // 尺寸
    size: {
        type: String,
        values: ['', 'large', 'small', 'default'],
        default: ''
    }
})

export type RadioProps = ExtractPropTypes<typeof radioProps>
export type RadioEmits = ExtractPropTypes<typeof radioEmits>
