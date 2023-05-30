import { ExtractPropTypes, h } from 'vue'
import { buildProps, IconPropType } from '@sakura-ui/utils'
import Button from './button.vue'
import { Loading } from '@element-plus/icons-vue'
import { useSizeProp } from '@sakura-ui/hooks'
// import type { Component } from 'vue'
// 'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text'(delete)
export const buttonProps = buildProps({
    // 组件标签
    tag: {
        type: String,
        default: 'button'
    },
    // 按钮大小
    size: useSizeProp,
    // 按钮类型
    type: {
        type: String,
        values: ['', 'primary', 'success', 'warning', 'danger', 'info', 'text'],
        default: ''
    },
    // 是否镂空
    plain: Boolean,
    // 是否是圆角
    round: {
        type: Boolean,
        default: false
    },
    // 是否为圆形
    circle: Boolean,
    // 图标
    icon: {
        type: IconPropType
    },
    // 是否加载中
    loading: Boolean,
    // 加载中的图标
    loadingIcon: {
        type: IconPropType,
        default: () => Loading
    },
    // 是否是文字按钮
    text: Boolean,
    // 使用文字的时候是否默认就显示背景色
    textBackground: Boolean,
    // 是否禁用
    disabled: Boolean,
    // 按钮原生类型
    nativeType: {
        type: String,
        values: ['button', 'submit', 'reset'],
        default: 'button'
    },
    // 自定义颜色
    color: String,
    // 使用自定义颜色时是否启用dark模式
    dark: Boolean
})
export const buttonEmits = {
    click: (event: MouseEvent) => event instanceof MouseEvent
}
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
export type ButtonEmits = ExtractPropTypes<typeof buttonEmits>
