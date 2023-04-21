import { computed, Text, inject, getCurrentInstance, ref } from 'vue'
import { ButtonProps, ButtonEmits } from './button'
import { buttonGroupContextKey } from './constants'

export const useButton = (props: ButtonProps, emits: ButtonEmits) => {
    const _this = getCurrentInstance()
    // 按钮分组上下文
    const buttonGroupContext = inject(buttonGroupContextKey, undefined)

    const _ref = ref<HTMLButtonElement>()
    const _size = props.size || buttonGroupContext?.size || ''
    const _type = props.type || buttonGroupContext?.type || ''
    if (buttonGroupContext) {
        console.log(buttonGroupContext)
        console.log('_size---', _size)
        console.log('_type---', _type)
    }
    return {
        _ref,
        _size,
        _type
    }
}
