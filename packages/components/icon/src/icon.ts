import { ExtractPropTypes } from 'vue'
import { buildProps } from '@sakura-ui/utils'
export const iconProps = buildProps({
    size: String,
    color: {
        type: String,
        default: 'blue',
        values: ['red', 'blue']
    }
})
export type IconProps = ExtractPropTypes<typeof iconProps>