import { ExtractPropTypes } from 'vue'
import { buildProps, definePropType } from '@sakura-ui/utils'
export const iconProps = buildProps({
    size: {
        type: definePropType([String, Number]),
    },
    color: {
        type: String,
    }

})
export type IconProps = ExtractPropTypes<typeof iconProps>
