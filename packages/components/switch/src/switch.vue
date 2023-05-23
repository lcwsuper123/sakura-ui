<template>
    <div
        ref="_ref"
        :class="[
            ns.b(),
            ns.m(size),
            ns.is('checked', checked),
            ns.is('disabled', disabled || loading),
        ]"
        @click.prevent="switchValue"
    >
        <input
            ref="inputRef"
            :class="[ns.e('input')]"
            type="checkbox"
            role="switch"
            :name="name"
            :aria-checked="checked"
            :true-value="activeValue"
            :false-value="inactiveValue"
            :disabled="switchDisabled"
            @change="handleChange"
            @keydown.enter="switchValue"
        />
        <template v-if="!inlinePrompt">
             <span
                 :class="[
                        ns.e('label'),
                        ns.em('label', 'left'),
                        ns.is('active', checked)
                    ]"
             >
                <template v-if="inactiveIcon">
                    <s-icon>
                        <component :is="inactiveIcon" />
                    </s-icon>
                </template>
                <template v-else-if="inactiveText">
                    <span :aria-hidden="checked">{{ inactiveText }}</span>
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
                                :is="checked ? activeIcon : inactiveIcon"
                            />
                        </s-icon>
                    </template>
                    <template v-else-if="activeText || inactiveText">
                        <span
                            :class="[ns.is('text', true)]"
                            :aria-hidden="checked"
                        >{{ checked ? activeText : inactiveText }}</span>
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
                    ns.is('active', checked)
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
import { isBoolean, isPromise, isFunction } from '@sakura-ui/utils'
import { ref, computed, nextTick, watch } from 'vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT, INPUT_EVENT } from '@sakura-ui/constants'
import SIcon from '@sakura-ui/components/icon'

const props = defineProps(switchProps)
const emits = defineEmits(switchEmits)
const ns = useNamespace('switch')
const inputRef = ref<HTMLInputElement>()
const _ref = ref<HTMLElement>()
const switchDisabled = computed(() => props.disabled || props.loading)
// 是否需要双向绑定
const isControlled = ref(props.modelValue !== false)
watch(
    () => props.modelValue,
    () => {
        isControlled.value = true
    }
)
watch(
    () => props.value,
    () => {
        isControlled.value = false
    }
)
const actualValue = computed(() => isControlled.value ? props.modelValue : props.value)
const checked = computed(() => actualValue.value === props.activeValue)
watch(checked, (value) => {
    inputRef.value!.checked = value
})
const handleChange = () => {
    const { activeValue, inactiveValue } = props
    const value = checked.value ? inactiveValue : activeValue
    emits(UPDATE_MODEL_EVENT, value)
    emits(CHANGE_EVENT, value)
    emits(INPUT_EVENT, value)
    nextTick(() => {
        inputRef.value!.checked = checked.value
    })
}
const switchValue = () => {
    const { beforeChange } = props
    if (switchDisabled.value) return
    if (beforeChange !== null) {
        beforeChangeCall()
        return
    }
    handleChange()
}
const beforeChangeCall = () => {
    const { beforeChange } = props
    if (!isFunction(beforeChange) && !isBoolean(beforeChange)) {
        throw new Error('beforeChange type is not promise function or boolean')
    }
    // 如果是boolean类型并且值是true则就改变switch的值
    if (isBoolean(beforeChange) && beforeChange) {
        handleChange()
        return
    }
    // 如果是promise类型
    if (isFunction(beforeChange)) {
        const value = beforeChange()
        if (!value.then) {
            throw new Error('beforeChange return value is not promise')
        }
        value.then(res => res && handleChange())
    }
}
const switchCoreWidth = computed(() => {
    if (!props.width) return {}
    return {
        width: props.width + 'px'
    }
})
const focus = () => {
    inputRef?.value?.focus()
}
defineExpose({
    _ref,
    focus
})
</script>
<style lang="scss" scoped>

</style>
