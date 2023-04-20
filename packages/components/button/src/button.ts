import { ExtractPropTypes, h } from 'vue'
import { buildProps, definePropType } from '@sakura-ui/utils'
import Button from './button.vue'
import { Loading } from '@element-plus/icons-vue'

// import type { Component } from 'vue'
// 'primary'| 'success'| 'warning'| 'danger'| 'info'| 'text'(delete)
export const IconPropType = definePropType([
    String,
    Object,
    Function
])
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
    // 是否为圆形
    circle: {
        type: Boolean,
        default: false
    },
    // 图标
    icon: {
        type: IconPropType,
    },
    // 是否加载中
    loading: {
        type: Boolean,
        default: false
    },
    // 加载中的图标
    loadingIcon: {
        type: IconPropType,
        default: () => Loading
    },
    // 是否禁用
    disabled: {
        type: Boolean,
        default: false
    },
    // 按钮原生类型
    nativeType: {
        type: String,
        values: ['button', 'submit', 'reset'],
        default: 'button'
    },
    // 自定义颜色
    color: String
})

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonInstance = InstanceType<typeof Button>
