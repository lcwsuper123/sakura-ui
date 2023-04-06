export const componentSizes = ['', 'default', 'small', 'large'] as const
export type ComponentSize = typeof componentSizes[number]
export const componentMap = {
    large: 40,
    default: 32,
    small: 24
} as const
