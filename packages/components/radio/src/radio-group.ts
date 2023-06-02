import { ExtractPropTypes } from 'vue'
import { useSizeProp } from '@sakura-ui/hooks'
import { radioBaseProps, radioEmits } from './radio'
import { buildProps, isBoolean, isString, isNumber, IconPropType } from '@sakura-ui/utils'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT, INPUT_EVENT } from '@sakura-ui/constants'

export const radioGroupProps = buildProps({
    ...radioBaseProps,
    // 原生name值
    name: {
        type: String,
        default: ''
    },
    // 按钮形式的 Radio 激活时的文本颜色
    textColor: {
        type: String,
        default: '#ffffff'
    },
    // 按钮形式的 Radio 激活时的填充色和边框色
    fill: {
        type: String,
        default: '#409EFF'
    }
})

export const radioGroupEmits = radioEmits

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>
