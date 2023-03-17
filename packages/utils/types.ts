import {
    isArray,
    isObject,
    isString
} from '@vue/shared'
import { isNil } from 'lodash-unified'

export {
    isArray,
    isFunction,
    isObject,
    isString,
    isDate,
    isPromise,
    isSymbol
} from '@vue/shared'
export {
    isNumber,
    isBoolean
} from '@vueuse/core'
export {
    isVNode
} from 'vue'

/**
 * 是否是undefined类型
 * @param value
 */
export const isUndefined = (value: any): value is undefined => value === undefined
/**
 * 值是否为空
 * @param value
 */
export const isEmpty = (value: any) => ((!value && value !== 0) || (isArray(value) && value.length) || (isObject(value) && !Object.keys(value)))
/**
 * 判断一个值是否是element
 * @param value
 */
export const isElement = (value: any): value is Element => {
    if (typeof value === 'undefined') return false
    return value instanceof Element
}
/**
 * 是否是字符串数字
 * @param value
 */
export const isStringNumber = (value: string): boolean => {
    if (!isString(value)) {
        return false
    }
    return !Number.isNaN(Number(value))
}
/**
 * 是否属性不存在
 * @param prop
 */
export const isPropAbsent = (prop: unknown): prop is null | undefined => isNil(prop)