<template>
    <div>
        num---{{ num }}
        <input-number
            v-model="num"
            :max="10"
            :min="1"
            :step="3"
            disabled
        />
        <input-number
            size="small"
            :max="10"
            :min="1"
        />
        <input-number
            size="large"
        />
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import InputNumber from '@sakura-ui/components/input-number'
const num = ref(1)
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