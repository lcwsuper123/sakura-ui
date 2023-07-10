import { NOOP } from '@vue/shared'
import type { App, Directive } from 'vue'
import type { SFCWithInstall, SFCInstallWithContext } from './typescript'

/**
 * 安装组件
 * @param main 组件
 * @param extra 额外的组件
 */
export const withInstall = <T, E extends Record<string, any>>(main: T, extra?: E) => {
    ;(main as SFCWithInstall<T>).install = (app: App): void => {
        for (const comp of [main, ...Object.values(extra ?? {})]) {
            app.component(comp.name, comp)
        }
    }
    if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
            ;(main as any)[key] = comp
        }
    }
    return main as SFCWithInstall<T> & E
}
/**
 * 安装方法
 * @param fn 方法
 * @param name 方法名称
 */
export const withInstallFunction = <T>(fn: T, name: string) => {
    ;(fn as SFCWithInstall<T>).install = (app: App): void => {
        ;(fn as SFCInstallWithContext<T>)._context = app._context
        app.config.globalProperties[name] = fn
    }
}
/**
 * 安装指令
 * @param directive 指令内容
 * @param name 指令名称
 */
export const withInstallDirective = <T extends Directive>(directive: T, name: string) => {
    ;(directive as SFCWithInstall<T>).install = (app: App): void => {
        app.directive(name, directive)
    }
    return directive as SFCWithInstall<T>
}
export const withNoopInstall = <T>(component: T) => {
    ;(component as SFCWithInstall<T>).install = NOOP
    return component as SFCWithInstall<T>
}