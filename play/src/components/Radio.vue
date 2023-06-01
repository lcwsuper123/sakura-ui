<template>
    <s-radio
        size="default"
        border
        model-value="1"
        label="1"
        disabled
    >
        option1
    </s-radio>
    <s-radio
        size="small"
    >
        option1
    </s-radio>
    <s-radio
        size="large"
        disabled
    >
        disabled
    </s-radio>
    <s-radio-group size="large" v-model="demo">
        <s-radio-button
            disabled
            label="a"
        >你好
        </s-radio-button>
        <s-radio-button
            label="b"
            checked
        >你好
        </s-radio-button>
        <s-radio-button
            label="c"
        >你好
        </s-radio-button>
    </s-radio-group>
    <div>
        <s-radio-button
            size="small"
            disabled
        >你好
        </s-radio-button>
    </div>
</template>
<script lang="ts" setup>
import { provide, ref } from 'vue'
import SRadio, { SRadioButton, SRadioGroup } from '@sakura-ui/components/radio'

const demo = ref('')
</script>
<style lang="scss" scoped></style>
