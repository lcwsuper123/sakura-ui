import { ExtractPropTypes } from 'vue'
import { buildProps } from '@sakura-ui/utils'
import { componentSizes } from '@sakura-ui/constants'
import type Text from './text.vue'

export const textProps = buildProps({
    // 文字标签
    tag: {
        type: String,
        default: 'span'
    },
    // 文字类型
    type: {
        type: String,
        values: ['primary', 'success', 'info', 'warning', 'danger', ''],
        default: ''
    },
    // 是否只显示一行
    truncated: Boolean,
    // 文字尺寸
    size: {
        type: String,
        values: componentSizes,
        default: ''
    },
    // 第几行开始超出部分隐藏
    multiline: {
        type: Number,
        values: [-1, 1, 2, 3, 4, 5],
        default: -1
    }
})
export type TextProps = ExtractPropTypes<typeof textProps>
export type TextInstance = InstanceType<typeof Text>
