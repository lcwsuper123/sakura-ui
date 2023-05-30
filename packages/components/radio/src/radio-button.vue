<template>
    <label
        :class="[
            ns.b(),
            ns.is('checked', checked),
            ns.is('disabled', disabled)
        ]"
    >
        <input
            :class="[ns.em('original', 'input')]"
            :name="name"
            :value="label"
            type="radio"
            :disabled="disabled"
        />
        <span
            :class="[ns.e('inner')]"
        >
            <slot />
        </span>
    </label>
</template>
<script lang="ts" setup name="SRadioButton">
import { getCurrentInstance, onMounted } from 'vue'
import { useNamespace } from '@sakura-ui/hooks'
import { radioButtonProps } from './radio-button'

const { parent, proxy } = getCurrentInstance()
const ns = useNamespace('radio-button')
const props = defineProps(radioButtonProps)

onMounted(() => {
    console.log(parent)
    console.log(proxy.$parent)
})

</script>
<style lang="scss" scoped>

</style>
