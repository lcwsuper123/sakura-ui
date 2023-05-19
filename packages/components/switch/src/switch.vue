<template>
    <div
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('checked', modelValue),
            ns.is('disabled', disabled || loading),
        ]"
        @click.prevent="switchValue"
    >
        <input
            ref="inputRef"
            :class="[ns.e('input')]"
            type="checkbox"
            role="switch"
        />
        <template v-if="!inlinePrompt">
             <span
                 :class="[
                        ns.e('label'),
                        ns.em('label', 'left'),
                        ns.is('active', !modelValue)
                    ]"
             >
                <template v-if="inactiveIcon">
                    <s-icon>
                        <component :is="inactiveIcon" />
                    </s-icon>
                </template>
                <template v-else-if="inactiveText">

                        <span>{{ inactiveText }}</span>
                </template>
            </span>
        </template>
        <span
            :class="[ns.e('core')]"
            :style="switchCoreWidth"
        >
            <template v-if="inlinePrompt">
                <div
                    :class="[ns.e('inner')]"
                >
                    <template v-if="activeIcon || inactiveIcon">
                        <s-icon :class="[ns.is('icon')]">
                            <component
                                :is="modelValue ? activeIcon : inactiveIcon"
                            />
                        </s-icon>
                    </template>
                    <template v-else-if="activeText || inactiveText">
                        <span
                            :class="[ns.is('text', true)]"
                            :aria-hidden="!modelValue"
                        >{{ modelValue ? activeText : inactiveText }}</span>
                    </template>
                </div>
            </template>
            <div
                :class="[ns.e('action')]"
            >
                <template v-if="loading">

                    <!---->
                    <s-icon
                        :class="[ns.is('loading', loading)]"
                    >
                        <component
                            :is="Loading"
                        />
                    </s-icon>
                </template>
            </div>
        </span>
        <template v-if="!inlinePrompt">
            <span
                :class="[
                    ns.e('label'),
                    ns.em('label', 'right'),
                    ns.is('active', modelValue)
                ]"
            >
                <template v-if="activeIcon">
                    <s-icon>
                        <component
                            :is="activeIcon"
                        />
                    </s-icon>
                </template>
                <template v-else-if="activeText">
                        <span>{{ activeText }}</span>
                </template>
            </span>
        </template>
    </div>
</template>
<script lang="ts" setup name="SSwitch">
import { switchProps, switchEmits } from './switch'
import { Loading } from '@element-plus/icons-vue'
import { useNamespace } from '@sakura-ui/hooks'
import { ref, computed } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT, INPUT_EVENT } from '@sakura-ui/constants'
import SIcon from '@sakura-ui/components/icon'

const props = defineProps(switchProps)
const emits = defineEmits(switchEmits)
const ns = useNamespace('switch')
const inputRef = ref<HTMLInputElement>()
const handleChange = () => {
    const { activeValue, inactiveValue, modelValue } = props
    const value = modelValue ? inactiveValue : activeValue
    emits(UPDATE_MODEL_EVENT, value)
    emits(CHANGE_EVENT, value)
    emits(INPUT_EVENT, value)
}
const switchValue = () => {
    const { disabled, loading } = props
    if (disabled || loading) return
    handleChange()
}
const switchCoreWidth = computed(() => {
    if (!props.width) return {}
    return {
        width: props.width + 'px'
    }
})
</script>
<style lang="scss" scoped>

</style>
