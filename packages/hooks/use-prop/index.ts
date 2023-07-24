import { computed, ComputedRef, getCurrentInstance } from 'vue'

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
    const vm = getCurrentInstance()
    return computed<T>(() => vm?.proxy?.$props?.[name])
}