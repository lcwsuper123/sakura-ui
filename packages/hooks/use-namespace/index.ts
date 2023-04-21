import type { ComputedRef, InjectionKey, Ref } from 'vue'
import { computed, inject, ref, unref } from 'vue'

/**
 * 默认的命名空间前缀
 */
export const defaultNamespace = 's'
const statePrefix = 'is-'
/**
 * 命名空间上下文key
 */
export const namespaceContextKey: InjectionKey<Ref<string | undefined>> = Symbol('namespaceContextKey')
/**
 * 创建对应得class名称
 * @param namespace 命名空间名称
 * @param block 组件名称
 * @param blockSuffix 前缀
 * @param element 标签
 * @param modifier 修饰语
 */
export const _bem = (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string
) => {
    let className = `${ namespace }-${ block }`
    if (blockSuffix) {
        className += `-${ blockSuffix }`
    }
    if (element) {
        className += `__${ element }`
    }
    if (modifier) {
        className += `--${ modifier }`
    }
    return className
}
/**
 * 获取上下文命名空间
 * @param namespaceOverrides 传递了的话就会重写命名空间不传则”s“
 */
export const useGetDerivedNamespace = (namespaceOverrides?: Ref<string | undefined> | string) => {
    const derivedNamespace = namespaceOverrides || inject(namespaceContextKey, ref(defaultNamespace))
    return computed(() => {
        return unref(derivedNamespace) || defaultNamespace
    })
}
/**
 * 创建组件的命名空间
 * @param block 组件名称
 * @param namespaceOverrides 传递了的话就会重写命名空间不传则”s“
 */
export const useNamespace = (block: string, namespaceOverrides?: Ref<string | undefined> | string) => {
    const namespace = useGetDerivedNamespace(namespaceOverrides)
    /**
     * 获取组件的classname
     * @param blockSuffix 标签前缀
     */
    const b = (blockSuffix = '') => {
        return _bem(namespace.value, block, blockSuffix, '', '')
    }
    /**
     * 获取组件的内容classname
     * @param element
     */
    const e = (element = '') => {
        return element && _bem(namespace.value, block, '', element, '')
    }
    /**
     * 获取组件修饰符classname
     * @param modifier
     */
    const m = (modifier = '') => {
        return modifier && _bem(namespace.value, block, '', '', modifier)
    }
    /**
     * 获取组件内容的classname
     * @param blockSuffix 前缀
     * @param element 标签
     */
    const be = (blockSuffix = '', element = '') => {
        return blockSuffix && element ? _bem(namespace.value, block, blockSuffix, element, '') : ''
    }
    const em = (element = '', modifier = '') => {
        return element && modifier ? _bem(namespace.value, block, '', element, modifier) : ''
    }
    const bm = (blockSuffix = '', modifier = '') => {
        return blockSuffix && modifier ? _bem(namespace.value, block, blockSuffix, '', modifier) : ''
    }
    const bem = (blockSuffix = '', element = '', modifier = '') => {
        return blockSuffix && element && modifier ? _bem(namespace.value, block, blockSuffix, element, modifier) : ''
    }
    /**
     * 判断是否需要使用classname为is-${name}的classname
     * @param name
     * @param args
     */
    const is: {
        (name: string, state: boolean | undefined): string,
        (name: string): string
    } = (name: string, ...args: [boolean | undefined] | []) => {
        const state = args.length ? args[0] : true
        return name && state ? `${ statePrefix + name }` : ''
    }
    // css变量
    /**
     * 获取css变量
     * @param object
     */
    const cssVar = (object: Record<string, string>) => {
        const styles: Record<string, string> = {}
        for (const key in object) {
            if (object[key]) {
                styles[`--${ namespace.value }-${ key }`] = object[key]
            }
        }
        return styles
    }
    const cssBlockVar = (block: string, object: Record<string, string>) => {
        const styles: Record<string, string> = {}
        for (const key in object) {
            if (object[key]) {
                styles[`--${ namespace.value }-${ block }-${ key }`] = object[key]
            }
        }
        return styles
    }
    const cssVarName = (name: string) => `${ namespace.value }-${ name }`
    const cssBlockVarName = (name: string) => `${ namespace.value }-${ block }-${ name }`
    const cssVarNameValue = (name: string) => `var(--${cssVarName(name)})`
    return {
        namespace,
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is,
        cssVar,
        cssBlockVar,
        cssVarName,
        cssBlockVarName,
        cssVarNameValue
    }
}

export type UseNamespaceReturn = ReturnType<typeof useNamespace>
