import { ExtractPropTypes } from 'vue'
import { useSizeProp } from '@sakura-ui/hooks'
import { radioBaseProps, radioEmits } from './radio'
import { buildProps, isBoolean, isString, isNumber, IconPropType } from '@sakura-ui/utils'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '@sakura-ui/constants'

export const radioGroupProps = buildProps({
    ...radioBaseProps,
    // 绑定值
    modelValue: {
        type: [String, Number, Boolean],
        default: ''
    },
    // 原生name值
    name: {
        type: String,
        default: ''
    }
})

export const radioGroupEmits = radioEmits

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
