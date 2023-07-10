<template>
    <div
        :class="[
            ns.b(), ns.m(size)
        ]"
    >

    </div>
</template>
<script lang="ts" setup>
import { selectProps, selectEmits } from './select'
import { useNamespace } from '@sakura-ui/hooks'

const props = defineProps(selectProps)
const emits = defineEmits(selectEmits)
const ns = useNamespace('select')
</script>
<style scoped lang="scss">

</style>