import type { InjectionKey } from 'vue'
import type { RadioGroupProps } from './radio-group'

export interface RadioGroupContext extends RadioGroupProps {
    changeEvent: (value: RadioGroupProps['modelValue']) => void
}


export const radioGroupKey: InjectionKey<RadioGroupContext> = Symbol('radioGroupKey')