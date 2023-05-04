import { computed, Text, inject, getCurrentInstance, ref } from 'vue'
import { ButtonProps, ButtonEmits } from './button'
import { buttonGroupContextKey } from './constants'

export const useButton = (props: ButtonProps, emits: ButtonEmits) => {
    const _this = getCurrentInstance()
    // 按钮分组上下文
    const buttonGroupContext = inject(buttonGroupContextKey, undefined)
    const _ref = ref<HTMLButtonElement>()
    const _size = computed(() => props.size || buttonGroupContext?.size || '')
    const _type = computed(() => props.type || buttonGroupContext?.type || '')
    const _buttonAttrs = computed(() => {
        const { tag, disabled, loading, nativeType } = props
        if (tag !== 'button') return {}
        return {
            disabled: disabled || loading,
            type: nativeType
        }
    })
    return {
        _ref,
        _size,
        _type,
        _buttonAttrs
    }
}
