import { ExtractPropTypes } from 'vue'
import { buildProps } from '@sakura-ui/utils'
import { radioBaseProps, radioEmits } from './radio'

export const radioButtonProps = buildProps({
    ...radioBaseProps,
    // 原始 name 属性
    name: String
})
export const radioButtonEmits = radioEmits
export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>
export type RadioButtonEmits = ExtractPropTypes<typeof radioButtonEmits>