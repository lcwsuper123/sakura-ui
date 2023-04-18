import { ExtractPropTypes } from 'vue'
import { buildProps } from '@sakura-ui/utils/index'
import Button from './button.vue'
// 'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text'(delete)
export const buttonProps = buildProps({
    // 按钮大小
    size: {
        type: String,
        values: ['', 'large', 'default', 'small'],
        default: ''
    },
    // 按钮类型
    type: {
        type: String,
        values: ['', 'primary', 'success', 'warning', 'danger', 'info', 'text'],
        default: ''
    },
    // 是否镂空
    plain: {
        type: Boolean,
        default: false
    },
    // 是否是圆角
    round: {
        type: Boolean,
        default: false
    },
    // 按钮原生类型
    nativeType: {
        type: String,
        values: ['button', 'submit', 'reset'],
        default: 'button'
    },
    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    }
})

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
