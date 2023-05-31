import { buildProps } from '@sakura-ui/utils'
import { ExtractPropTypes } from 'vue'
import { useSizeProp } from '@sakura-ui/hooks'
import { radioBaseProps } from './radio'

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


export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
