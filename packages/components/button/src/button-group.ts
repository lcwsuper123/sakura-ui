import { buildProps } from '@sakura-ui/utils'
import { ExtractPropTypes } from 'vue'
import { buttonProps } from './button'

export const buttonGroupProps = {
    size: buttonProps['size'],
    type: buttonProps['type']
}
export type ButtonGroupProps = ExtractPropTypes<typeof buttonProps>
