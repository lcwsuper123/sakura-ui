<template>
    <div>
        <input-number
        />
        <input-number
            size="small"
        />
        <input-number
            size="large"
        />
    </div>
</template>

<script lang="ts" setup>
import InputNumber from '@sakura-ui/components/input-number'
</script>

<style lang="scss" scoped>
div{
    display: flex;
    flex-flow: column;
    .s-input-number{
      margin-bottom: 20px;
    }
}
</style>