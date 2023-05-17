<template>
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
        inaction-text="世界"
        size="default"
    />
    <s-switch
        v-model="checked"
        active-text="你好你好你好1"
        inaction-text="你好你好你好2"
        inline-prompt
        size="large"
    />
    <s-switch
        v-model="checked"
        active-text="多出部分隐藏"
        inaction-text="多出部分隐藏"
        width="90"
        inline-prompt
        size="large"
        style="--s-switch-on-color: pink; --s-switch-off-color: red;"
    />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import SSwitch from '@sakura-ui/components/switch'

const checked = ref(false)
</script>
<style lang="scss" scoped>
//.s-switch{
//    display: block;
//}
</style>
