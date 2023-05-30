import { buildProps } from '@sakura-ui/utils'
import { ExtractPropTypes } from 'vue'
import { useSizeProp } from '@sakura-ui/hooks'

export const radioGroupProps = buildProps({
    modelValue: {
        type: [String, Number, Boolean],
        default: ''
    },
    size: useSizeProp
})


export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
