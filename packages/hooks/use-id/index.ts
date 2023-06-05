import { computed, getCurrentInstance, inject, unref } from 'vue'
import { isClient } from '@vueuse/core'
import { useGetDerivedNamespace } from '../use-namespace'

import type { InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'


export type SInjectionContext = {
    prefix: number,
    current: number
}

const defaultIdInjection: SInjectionContext = {
    prefix: Math.floor(Math.random() * 10000),
    current: 0
}

export const ID_INJECTION_KEY: InjectionKey<SInjectionContext> = Symbol('sIdInjection')

export const useIdInjection = (): SInjectionContext => getCurrentInstance() ? inject(ID_INJECTION_KEY, defaultIdInjection) : defaultIdInjection


export const useId = (deterministcId?: MaybeRef<string>): Ref<string> => {
    const idInject = useIdInjection()
    if (!isClient && idInject === defaultIdInjection) {
        console.warn(`Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`)
    }
    const ns = useGetDerivedNamespace()
    return computed(() => unref(deterministcId) || `${ ns.value }-id-${ idInject.prefix }-${ idInject.current++ }`)
}

