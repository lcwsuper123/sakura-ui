import { ExtractPropTypes } from 'vue'
import { buildProps } from '@sakura-ui/utils'

export const switchEmits = {
    'update:modelValue': (value: Boolean | String | Number) => value
}
export const switchProps = buildProps({
    modelValue: {
        type: [Boolean, String, Number],
        default: false
    },
    // 是否禁用
    disabled: Boolean,
    // 是否显示加载中
    loading: Boolean,
    // 尺寸
    size: {
        type: String,
        values: ['', 'large', 'default', 'small'],
        default: ''
    }
})

export type SwitchProps = ExtractPropTypes<typeof switchProps>
export type SwitchEmits = ExtractPropTypes<typeof switchEmits>
