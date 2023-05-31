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
    <s-radio-group size="large">
        <s-radio-button
            size="small"
            disabled
        >你好
        </s-radio-button>
        <s-radio-button
            checked
        >你好
        </s-radio-button>
        <s-radio-button
        >你好
        </s-radio-button>
    </s-radio-group>
    <s-radio-button
        size="large"
    >你好
    </s-radio-button>
</template>
<script lang="ts" setup>
import { provide } from 'vue'
import SRadio, { SRadioButton, SRadioGroup } from '@sakura-ui/components/radio'
</script>
<style lang="scss" scoped></style>
