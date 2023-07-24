<template>
    <div class="input">
        <s-input
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
    </div>
</template>
<script lang="ts" setup>
import SInput from '@sakura-ui/components/input'
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