import { isStringNumber, isNumber, isString } from '../types'

/**
 * 添加单位
 * @param value 单位值
 * @param defaultUnit 单位 默认px
 */
export const addUnit = (value?: number | string, defaultUnit = 'px'): string => {
    if (!value) return ''
    if (isNumber(value) || isStringNumber(value)) {
        return value + defaultUnit
    }
    return value
}
