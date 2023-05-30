<template>
    <div
        :class="[
            ns.b()]
        "
    >
        <slot />
    </div>
</template>
<script lang="ts" setup name="SRadioGroup">
import { getCurrentInstance, onMounted } from 'vue'
import { useNamespace } from '@sakura-ui/hooks'
import { radioGroupProps } from './radio-group'

const { parent, proxy } = getCurrentInstance()
const ns = useNamespace('radio-group')
const props = defineProps(radioGroupProps)

onMounted(() => {
    console.log(parent)
    console.log(proxy.$refs)
})
defineExpose({
    id: '1'
})

</script>
<style lang="scss" scoped>

</style>
