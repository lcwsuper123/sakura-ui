import { ExtractPropTypes } from 'vue'
import { buildProps } from '@sakura-ui/utils/index'

export const textProps = buildProps({
    text: {
        type: String,
        default: '内容'
    },
    color: {
        type: String,
        default: 'pink'
    }
})
export type TextProp = ExtractPropTypes<typeof textProps>
