import { useProp } from '../use-prop'
import { computed, unref } from 'vue'
import type { MaybeRef } from '@vueuse/core'

export const useFormDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
    const disabled = useProp('disabled')
    return computed(() => disabled.value || unref(fallback) || false)
}