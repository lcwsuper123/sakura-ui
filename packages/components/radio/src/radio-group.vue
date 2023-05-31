<template>
    <div
        ref="radioGroupRef"
        :class="[
            ns.b('group')]
        "
    >
        <slot />
    </div>
</template>
<script lang="ts" setup name="SRadioGroup">
import { provide, onMounted, toRefs, reactive, ref } from 'vue'
import { useNamespace } from '@sakura-ui/hooks'
import { radioGroupProps } from './radio-group'
import { useRadio } from './use-radio'
import { radioGroupKey } from './constants'

const ns = useNamespace('radio')
const props = defineProps(radioGroupProps)
const radioGroupRef = ref<HTMLDivElement>(null)
const changeEvent = (value: string | number | boolean) => {

}
provide(radioGroupKey, reactive({
    ...toRefs(props),
    changeEvent,
}))
// const {  } = useRadio()
</script>
<style lang="scss" scoped>

</style>
