import { warn } from 'vue'
import { fromPairs } from 'lodash-unified'
import { isObject } from '../../types'
import { hasOwn } from '@vue/shared'

import type { PropType } from 'vue'
import type {
    EpProp,
    EpPropConvert,
    EpPropFinalized,
    EpPropInput,
    EpPropMergeType,
    IfEpProp,
    IfNativePropType,
    NativePropType
} from './type'
import * as jsdom from 'jsdom'
import object from 'async-validator/dist-types/validator/object'

export const epPropKey = '__epPropKey'

export const definePropType = <T>(value: any): PropType<T> => value

export const isEpProp = (value: unknown): value is EpProp<any, any, any> => isObject(value) && !!(value as any)[epPropKey]

/**
 * 组件属性默认值
 * @param prop
 * @param key
 */
export const buildProp = <
    Type = never,
    Value = never,
    Validator = never,
    Default extends EpPropMergeType<Type, Value, Validator> = never,
    Required extends boolean = false
>(
    prop: EpPropInput<Type, Value, Validator, Default, Required>,
    key?: string
): EpPropFinalized<Type, Value, Validator, Default, Required> => {
    // 如果不是对象 color: String 类型时直接返回值
    if (!isObject(prop) || isEpProp(prop)) return prop as any
    /**
     * values -> 默认值
     * required -> 是否必填
     * default -> 默认值
     * type -> 类型
     * validator -> 效验规范
     */
    const { values, required, default: defaultValue, type, validator } = prop
    const _validator = values || validator ? (value: unknown) => {
        let valid = false
        let allowedValues: unknown[] = []
        // values -> 默认值
        if (values) {
            allowedValues = Array.from(values)
            if (hasOwn(prop, 'default') && !allowedValues.includes(defaultValue)) {
                allowedValues.push(defaultValue)
            }
            valid = valid || allowedValues.includes(value)
        }
        // 如果有传递效验规, 则使用用户传递的效验规则来效验
        if (validator) valid = valid || validator(value)
        // 如果效验的内容为不符合,并且有传递默认值的话则抛出警告
        if (!valid && allowedValues.length) {
            const allowValuesText = [...new Set(allowedValues)].map(v => JSON.stringify(v)).join(', ')
            warn(
                `Invalid prop: validation failed${
                    key ? ` for prop "${ key }"` : ''
                }. Expected one of [${ allowValuesText }], got value ${ JSON.stringify(
                    value
                ) }.`
            )
        }
        return valid
    } : undefined
    const epProp: any = {
        type,
        required: !!required,
        validator: _validator,
        [epPropKey]: true
    }
    if (hasOwn(prop, 'default')) epProp.default = defaultValue
    return epProp
}
/**
 * 参考饿了么ui理解写的
 * @param prop
 */
export const uBuildProp = (prop: {
    type: any,
    default: any,
    required: boolean,
    values: any[],
    validator: any
}) => {
    const { type, default: defaultValue, required, values, validator } = prop
    const _validator = values || validator ? (value: any) => {
        let valid = false
        let allowValues = []
        if (values) {
            allowValues = Array.from(values)
            if (defaultValue && !allowValues.includes(defaultValue)) {
                allowValues.push(defaultValue)
            }
            valid = valid || allowValues.includes(value)
        }
        if (validator) valid = valid || validator(value)
        return valid
    } : undefined
    const epProp: any = {
        type,
        required,
        validator: _validator
    }
    if (prop.default) epProp.default = defaultValue
    return epProp

}
export const buildProps = <
    Props extends Record<
        string,
        | { [epPropKey]: true }
        | NativePropType
        | EpPropInput<any, any, any, any, any>
    >
>(props: Props): {
    [K in keyof Props]: IfEpProp<Props[K], Props[K], IfNativePropType<Props[K], Props[K], EpPropConvert<Props[K]>>>
} => {
    return fromPairs(
        Object.entries(props).map(([key, value]) => [
            key,
            buildProp(value as any, key)
        ])
    ) as any
    // return uFormPairs(Object.entries(props).map(([key, value]) => [
    //     key,
    //     buildProp(value as any, key)
    // ])) as any
}
/**
 * @param value
 */
export const uFormPairs = (value: [string, any][]): {
    [K: string]: any
} => {
    return value.reduce((v, [key, option]) => {
        v[key] = option
        return v
    }, {} as any)
}
