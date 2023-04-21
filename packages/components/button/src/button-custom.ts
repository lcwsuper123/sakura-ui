import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { useNamespace, type UseNamespaceReturn } from '@sakura-ui/hooks'
import type { ButtonProps } from './button'

const ns = useNamespace('button')

export function darken(color: TinyColor, amount = 20) {
    return color.mix('#141414', amount).toString()
}

export function buttonCustomTintColor(color: TinyColor, amount: number, dark: boolean): string {
    return dark ? darken(color, amount) : color.tint(amount).toString()
}

export function buttonCustomTintColors(color: TinyColor, amounts: number[], dark: boolean): string[] {
    return amounts.reduce((colors, amount) => {
        colors.push(buttonCustomTintColor(color, amount, dark))
        return colors
    }, [] as string[])
}

export function useButtonCustomStyle(props: ButtonProps) {
    return computed(() => {
        const buttonColor = props.color
        const disabled = props.disabled
        const color = new TinyColor(buttonColor)
        if (!buttonColor) return {}
        let style: Record<string, string> = {}
        const whiteColor = ns.cssVarNameValue('color-white')
        const [color20, color30, color50, color80, color90] = buttonCustomTintColors(color, [20, 30, 50, 80, 90], props.dark)
        const activeColor = color20
        const disabledColorStyle = ns.cssBlockVar('button', {
            'disabled-text-color': props.plain ? color50 : whiteColor,
            'disabled-border-color': props.plain ? color80 : color50,
            'disabled-background-color': props.plain ? color90 : color50
        })
        // 如果不是镂空按钮
        if (!props.plain) {
            style = ns.cssBlockVar('button', {
                'text-color': whiteColor,
                'border-color': buttonColor,
                'background-color': buttonColor,
                'hover-text-color': whiteColor,
                'hover-border-color': color30,
                'hover-background-color': color30,
                'active-border-color': activeColor,
                'active-background-color': activeColor
            })
        } else {
            style = ns.cssBlockVar('button', {
                'text-color': buttonColor,
                'border-color': color50,
                'background-color': color90,
                'hover-text-color': whiteColor,
                'hover-border-color': buttonColor,
                'hover-background-color': buttonColor,
                'active-border-color': darken(color),
                'active-background-color': darken(color)
            })
        }
        if (disabled) {
            Object.assign(style, disabledColorStyle)
        }
        console.log(style)
        return style
    })
}
