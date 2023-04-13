import { ExtractPropTypes } from 'vue'
import { buildProps } from '@sakura-ui/utils/index'
import Button from './button.vue'
// 'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text'(delete)
export const buttonProps = buildProps({
    type: {
        type: String,
        values: ['', 'primary', 'success', 'warning', 'danger', 'info', 'text'],
        default: ''
    },
    plain: {
        type: Boolean,
        default: false
    }
})

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
