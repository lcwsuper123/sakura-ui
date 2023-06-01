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
import { radioGroupProps, radioGroupEmits } from './radio-group'
import { useRadio } from './use-radio'
import { radioGroupKey } from './constants'
import { UPDATE_MODEL_EVENT } from '@sakura-ui/constants'

const ns = useNamespace('radio')
const props = defineProps(radioGroupProps)
const emits = defineEmits(radioGroupEmits)
const radioGroupRef = ref<HTMLDivElement>(null)
const changeEvent = (value: string | number | boolean) => {
    if (props.disabled) return
    emits(UPDATE_MODEL_EVENT, value)
}
console.log('emits---', emits)
provide(radioGroupKey, reactive({
    ...toRefs(props),
    changeEvent
}))
// const {  } = useRadio()
defineExpose({
    radioGroupRef
})
</script>
<style lang="scss" scoped>

</style>
