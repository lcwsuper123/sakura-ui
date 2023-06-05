import { inject, computed } from 'vue'
import { radioGroupKey } from './constants'
import { RadioEmits, RadioProps } from './radio'
import { isString } from '@sakura-ui/utils'
import { UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import type { SetupContext } from 'vue'

export const useRadio = (props: RadioProps, emits?: SetupContext<RadioEmits>['emit']) => {
    const radioGroup = inject(radioGroupKey, null)
    const isGroup = computed(() => !!radioGroup)
    const modelValue = computed<RadioProps['modelValue']>({
        get() {
            return isGroup.value ? radioGroup.modelValue : props.modelValue
        },
        set(value) {
            if (isGroup.value) {
                radioGroup.changeEvent(value)
            } else {
                emits && emits(UPDATE_MODEL_EVENT, value)
            }
        }
    })
    const _disabled = computed<boolean>(() => isGroup.value ? props.disabled || radioGroup.disabled : props.disabled)
    const _size = computed<RadioProps['size']>(() => isGroup.value ? props.size || radioGroup.size : props.size)
    const _checked = computed<boolean>(() => isString(modelValue.value) ? Boolean(modelValue.value.length && modelValue.value === props.label) : modelValue.value === props.label)
    // inject
    return {
        radioGroup,
        _disabled,
        _size,
        _checked,
        isGroup,
        modelValue
    }
}