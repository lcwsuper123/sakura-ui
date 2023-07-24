<template>
    <div class="input">
        value---{{ value }}
        <s-input
            v-model="value"
            placeholder="请输入"
        />
        <s-input size="small" />
        <s-input size="large" />
        <s-input
            size="large"
            disabled
            placeholder="disabled"
            model-value="111"
        />
        <s-input
            v-model="value"
            size="large"
            :prefix-icon="Search"
            :suffix-icon="Loading"
        />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import SInput from '@sakura-ui/components/input'
import { Search, Loading } from '@element-plus/icons-vue'
const value = ref('22222')
</script>
<style scoped lang="scss">
.input {
    width: 50vw;
    display: flex;
    flex-flow: column;

    .s-input {
        margin-bottom: 20px;
    }
}
</style>