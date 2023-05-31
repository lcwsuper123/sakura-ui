import { ref, inject, computed } from 'vue'
import { radioGroupKey } from './constants'
import { RadioProps } from './radio'
import { RadioButtonProps } from './radio-button'

export const useRadio = (props: RadioProps | RadioButtonProps) => {
    const radioGroup = inject(radioGroupKey, null)
    const isGroup = computed(() => !!radioGroup)
    console.log('isGroup---', isGroup)
    const _disabled = computed(() => isGroup.value ? radioGroup.disabled : props.disabled)
    const _size = computed(() => isGroup.value ? props.size || radioGroup.size : props.size)
    // inject
    return {
        radioGroup,
        _disabled,
        _size
    }
}