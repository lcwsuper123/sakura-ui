import Icon from './src/icon.vue'
import { Plugin, App } from "vue"
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = function (app: App):void {
        app.component((comp as any).name, comp)
    };
    return comp as SFCWithInstall<T>;
};
export const SakuraIcon = withInstall(Icon)
export default SakuraIcon // 导出组件
export * from './src/icon' // 导出组件的属性类型