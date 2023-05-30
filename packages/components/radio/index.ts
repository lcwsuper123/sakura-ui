import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'
import { withInstall, withNoopInstall } from '@sakura-ui/utils'

export const SRadio = withInstall(Radio, {
    RadioButton,
    RadioGroup
})
export default SRadio
export const SRadioButton = withNoopInstall(RadioButton)
export const SRadioGroup = withNoopInstall(RadioGroup)

export * from './src/radio'
export * from './src/radio-button'
export * from './src/radio-group'
