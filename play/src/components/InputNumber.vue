<template>
    <div>
        num---{{ num }}
        <input-number
            v-model="num"
            :max="10"
            :min="1"
            :step="3"
            disabled
            size="large"
        />
        {{ num2 }}
        <input-number
            v-model="num2"
            :max="10"
            :min="1"
            :step=".15"
            :precision="2"
            step-strictly
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
const num2 = ref(3)
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