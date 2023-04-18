<template>
    <button
        :class="[
            ns.b(),
            ns.m(type),
            size ? ns.m(size) : '',
            ns.is('plain', plain),
            ns.is('round', round),
            ns.is('disabled', disabled)
        ]"
        :disabled="disabled"
        :type="nativeType"
    >
        <slot />
    </button>
</template>
<script lang="ts" setup name="SButton">
import { computed } from 'vue'
import { buttonProps } from './button'
import { useNamespace } from '@sakura-ui/hooks/index'

const ns = useNamespace('button')
const props = defineProps(buttonProps)
</script>
