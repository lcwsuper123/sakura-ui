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
        size="large"
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
