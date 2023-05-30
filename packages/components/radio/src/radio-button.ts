import { ExtractPropTypes } from 'vue'
import { buildProps } from '@sakura-ui/utils'

export const radioButtonProps = buildProps({
    // 单选框的值
    label: {
        type: [String, Number, Boolean],
        default: ''
    },
    // 是否禁用
    disabled: Boolean,
    // 原生name属性
    name: String,
    checked: Boolean
})

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>