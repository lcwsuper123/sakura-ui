<template>
    <button
        :class="[
            ns.b(),
            ns.m(type),
            ns.m(size),
            ns.is('circle', circle),
            ns.is('plain', plain),
            ns.is('round', round),
            ns.is('loading', loading),
            ns.is('disabled', disabled),
        ]"
        :disabled="disabled"
        :type="nativeType"
    >
        <template v-if="loading">
            <template v-if="$slots.loading">
                <slot name="loading" />
            </template>
            <template v-else>
                <s-icon :class="ns.is('loading')">
                    <component
                        :is="loadingIcon"
                    />
                </s-icon>
            </template>
        </template>
        <template v-if="icon">
            <template v-if="$slots.icon">
                <slot name="icon" />
            </template>
            <template v-else>
                <s-icon>
                    <component
                        :is="icon"
                    />
                </s-icon>
            </template>
        </template>
        <slot />
    </button>
</template>
<script lang="ts" setup name="SButton">
import { computed } from 'vue'
import { buttonProps } from './button'
import { useNamespace } from '@sakura-ui/hooks'
import SIcon from '@sakura-ui/components/icon'

const ns = useNamespace('button')
const props = defineProps(buttonProps)
</script>
