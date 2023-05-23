<template>
    <div class="column">
        <s-switch
            v-model="checked"
            size="small"
        />
        <s-switch
            model-value
            disabled
        />
        <s-switch
            v-model="checked"
            active-text="你好"
            inactive-text="世界"
            size="default"
        />
        <s-switch
            v-model="checked"
            active-text="你好你好你好1"
            inactive-text="你好你好你好2"
            inline-prompt
            size="large"
        />
        customValue---{{ customValue }}
        <s-switch
            v-model="customValue"
            :active-value="1"
            :inactive-value="0"
            active-text="多出部分隐藏"
            inactive-text="多出部分隐藏"
            width="90"
            inline-prompt
            size="large"
            style="--s-switch-on-color: pink; --s-switch-off-color: red;"
        />
        <s-switch
            v-model="customValue"
            :active-value="1"
            :inactive-value="0"
            :active-icon="Check"
            :inactive-icon="Close"
            size="large"
        />
        <s-switch
            v-model="customValue"
            :active-value="1"
            :inactive-value="0"
            :active-icon="Check"
            :inactive-icon="Close"
            inline-prompt
        />
        <s-switch
            loading
            v-model="customValue"
        />
        <s-switch
            loading
        />
        <s-switch
            v-model="beforeChangeValue"
            :loading="isLoading"
            :before-change="beforeChangeFunction"
        />
        <s-switch
            v-model="checked"
            ref="switchFocusRef"
        />
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'
import SSwitch from '@sakura-ui/components/switch'

const checked = ref(false)
const isLoading = ref(false)
const customValue = ref(1)

const beforeChangeValue = ref(false)
const beforeChangeBoolean = ref(false)
const switchFocusRef = ref(null)
const beforeChangeFunction = () => {
    return new Promise((resolve, reject) => {
        isLoading.value = true
        setTimeout(() => {
            isLoading.value = false
            resolve(true)
        }, 1500)
    })
}
onMounted(() => {
    console.log()
    nextTick(() => {
        switchFocusRef?.value.focus()
    })
})
</script>
<style lang="scss" scoped>
.column {
    display: flex;
    flex-flow: column;
    align-items: center;
}

p {
    background-color: pink;
}
</style>
