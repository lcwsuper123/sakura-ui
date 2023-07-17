import type { ExtractPropTypes } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import { componentSizes } from '@sakura-ui/constants'
import { buildProps, isBoolean, isNumber, isString } from '@sakura-ui/utils'

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
    placeholder: String
})

export const inputEmits = {
    [UPDATE_MODEL_EVENT]: (value: string | number | boolean) => isString(value) || isNumber(value) || isBoolean(value),
    [CHANGE_EVENT]: (value: string | number | boolean) => isString(value) || isNumber(value) || isBoolean(value)
}


export type InputProps = ExtractPropTypes<typeof inputProps>
export type InputEmits = ExtractPropTypes<typeof inputEmits>