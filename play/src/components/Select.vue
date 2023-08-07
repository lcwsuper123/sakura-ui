<template>
    <div class="select">
        <s-select>

        </s-select>
        <s-select
            size="large"
        >

        </s-select>
    </div>
</template>
<script lang="ts" setup>
import SSelect from '@sakura-ui/components/select'
import { computed } from 'vue'
</script>
<style scoped lang="scss">
.select {
    display: flex;
    flex-flow: column;

    .s-select {
        margin-bottom: 20px;
    }
}
</style>