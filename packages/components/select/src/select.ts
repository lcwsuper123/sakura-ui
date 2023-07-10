import type { ExtractPropTypes } from 'vue'
import { buildProps, isArray, isBoolean, isNumber, isObject, isString } from '@sakura-ui/utils'
import { CHANGE_EVENT, componentSizes, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'

export const selectEmits = {
    [UPDATE_MODEL_EVENT]: (value: Array<any> | string | number | boolean | object) => isBoolean(value) || isString(value) || isArray(value) || isNumber(value) || isObject(value),
    [CHANGE_EVENT]: (value: Array<any> | string | number | boolean | object) => isBoolean(value) || isString(value) || isArray(value) || isNumber(value) || isObject(value)
}
export const selectProps = buildProps({
    modelValue: {
        type: [Array, String, Number, Boolean, Object],
        default: ''
    },
    size: {
        type: String,
        values: componentSizes,
        default: ''
    }
})

export type SelectProps = ExtractPropTypes<typeof selectProps>
export type SelectEmits = ExtractPropTypes<typeof selectEmits>