import { ref, inject, computed } from 'vue'
import { radioGroupKey } from './constants'
import { RadioProps } from './radio'

export const useRadio = (props: RadioProps) => {
    const radioGroup = inject(radioGroupKey, null)
    const isGroup = computed(() => !!radioGroup)
    const _disabled = computed(() => isGroup.value ? radioGroup.disabled : props.disabled)
    const _size = computed(() => isGroup.value ? props.size || radioGroup.size : props.size)
    const _checked = computed(() => props.label !== '' && isGroup.value ? radioGroup.modelValue === props.label : props.modelValue === props.label)
    // inject
    return {
        radioGroup,
        _disabled,
        _size,
        _checked,
        isGroup
    }
}