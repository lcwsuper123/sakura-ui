<template>
    <div class="input">
        <s-input />
        <s-input size="small" />
        <s-input size="large" />
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
    .s-input{
        margin-bottom: 20px;
    }
}
</style>