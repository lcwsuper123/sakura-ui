<template>
    <button
        ref="_ref"
        :class="[
            ns.b(),
            ns.m(_type),
            ns.m(_size),
            ns.is('circle', circle),
            ns.is('plain', plain),
            ns.is('round', round),
            ns.is('loading', loading),
            ns.is('disabled', disabled),
            ns.is('text', text),
            ns.is('has-background', textBackground)
        ]"
        :disabled="disabled || loading"
        :type="nativeType"
        :style="buttonCustomStyle"
    >
        <template v-if="loading">
            <template v-if="$slots.loading">
                <slot name="loading" />
            </template>
            <template v-else>
                <!--<s-icon :class="ns.is('loading')">-->
                <!--    <component-->
                <!--        :is="loadingIcon"-->
                <!--    />-->
                <!--</s-icon>-->
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
import { buttonProps, buttonEmits } from './button'
import { useNamespace } from '@sakura-ui/hooks'
import SIcon from '@sakura-ui/components/icon'
import { useButtonCustomStyle } from './button-custom'
import { useButton } from './use-button'

const props = defineProps(buttonProps)
const emits = defineEmits(buttonEmits)
const ns = useNamespace('button')
const buttonCustomStyle = useButtonCustomStyle(props)
const { _ref, _size, _type } = useButton(props, emits)
defineExpose({
    _ref,
    _size,
    _type
})
</script>
