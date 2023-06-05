<template>
    <div
        ref="radioGroupRef"
        :id="radioGroupId"
        :class="[
            ns.b('group')]
        "
    >
        <slot />
    </div>
</template>
<script lang="ts" setup name="SRadioGroup">
import { provide, onMounted, toRefs, reactive, ref, computed, nextTick } from 'vue'
import { useNamespace } from '@sakura-ui/hooks'
import { radioGroupProps, radioGroupEmits } from './radio-group'
import { radioGroupKey } from './constants'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@sakura-ui/constants'
import { useId } from '@sakura-ui/hooks'

const ns = useNamespace('radio')
const props = defineProps(radioGroupProps)
const emits = defineEmits(radioGroupEmits)
const radioGroupRef = ref<HTMLDivElement>(null)
const radioGroupId = computed<string>(() => props.id || useId().value)
const changeEvent = (value: string | number | boolean) => {
    if (props.disabled) return
    emits(UPDATE_MODEL_EVENT, value)
    nextTick(() => emits(CHANGE_EVENT, value))
}
provide(radioGroupKey, reactive({
    ...toRefs(props),
    changeEvent
}))
defineExpose({
    radioGroupRef,
    radioGroupId,
    ...props
})
</script>
<style lang="scss" scoped>

</style>
