import { buildProps } from '@sakura-ui/utils'
import { ExtractPropTypes } from 'vue'

export const radioGroupProps = buildProps({
    modelValue: {
        type: [String, Number, Boolean],
        default: ''
    },
    size: {
        type: String,
        values: ['', 'small', 'large'],
        default: ''
    }
})


export type RadioGroup = ExtractPropTypes<typeof radioGroupProps>
