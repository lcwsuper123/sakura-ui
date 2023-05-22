import { ExtractPropTypes } from 'vue'
import { buildProps, isBoolean, isString, isNumber, IconPropType } from '@sakura-ui/utils'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '@sakura-ui/constants'

export const switchEmits = {
    [UPDATE_MODEL_EVENT]: (value: boolean | string | number) => isBoolean(value) || isString(value) || isNumber(value),
    [CHANGE_EVENT]: (value: boolean | string | number) => isBoolean(value) || isString(value) || isNumber(value),
    [INPUT_EVENT]: (value: boolean | string | number) => isBoolean(value) || isString(value) || isNumber(value)
}

export const switchProps = buildProps({
    modelValue: {
        type: [Boolean, String, Number],
        default: false
    },
    // switch宽度
    width: String,
    // 是否禁用
    disabled: Boolean,
    // 是否显示加载中
    loading: Boolean,
    // 尺寸
    size: {
        type: String,
        values: ['', 'large', 'default', 'small'],
        default: ''
    },
    // 当状态是on时的值
    activeValue: {
        type: [Boolean, String, Number],
        default: true
    },
    // 当状态是off时的值
    inactiveValue: {
        type: [Boolean, String, Number],
        default: false
    },
    // switch 打开时的文字描述
    activeText: String,
    // switch 的状态为 off 时的文字描述
    inactiveText: String,
    // 无论图标或文本是否显示在点内，只会呈现文本的第一个字符
    inlinePrompt: Boolean,
    // switch 状态为 on 时所显示图标，设置此项会忽略 active-text
    activeIcon: {
        type: IconPropType
    },
    // switch 状态为 off 时所显示图标，设置此项会忽略 inactive-text
    inactiveIcon: {
        type: IconPropType
    },
    // switch 状态改变前的钩子, 返回 false 或者返回 Promise 且被 reject 则停止切换
    beforeChange: {
        type: [Boolean, Function],
        default: null
    }
})

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchEmits = ExtractPropTypes<typeof switchEmits>
