import { ExtractPropTypes } from 'vue'
import { buildProps } from '@sakura-ui/utils'
import { radioBaseProps } from './radio'

export const radioButtonProps = buildProps({
    ...radioBaseProps,
    // 原始 name 属性
    name: String,
})

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>