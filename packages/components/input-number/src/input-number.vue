<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('disabled', disabled)
        ]"
    >
        <span
            role="button"
            aria-label="crease number"
            :class="[
                ns.e('decrease')
            ]"
        >
            <s-icon
            >
                <minus />
            </s-icon>
        </span>
        <span
            role="button"
            aria-label="crease number"
            :class="[
                ns.e('increase'),
            ]"
        >
            <s-icon
            >
                <plus />
            </s-icon>
        </span>
        <div
            :class="[
                ns.m('wrapper'),
                ns.is('focus', focus)
            ]"
        >
            <input
                :class="[
                    ns.m('inner')
                ]"
                :min="min"
                :max="max"
                autocomplete="off"
                tabindex="0"
                role="spinbutton"
                :aria-valuemin="min"
                :aria-valuemax="max"
                :aria-disabled="disabled"
                :id="inputNumberId"
                @focus="focus = true"
                @blur="focus = false"
            />
        </div>
    </div>
</template>

<script setup lang="ts" name="SInputNumber">
import { ref } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'
import SIcon from '@sakura-ui/components/icon'
import { useNamespace } from '@sakura-ui/hooks'
import { inputNumberEmits, inputNumberProps } from './input-number'
import { useId } from '@sakura-ui/hooks'

const props = defineProps(inputNumberProps)
const emits = defineEmits(inputNumberEmits)
const ns = useNamespace('input-number')
const inputNumberId = useId()
const focus = ref(false)
</script>

<style lang="scss" scoped></style>