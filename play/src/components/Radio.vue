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
</template>
<script lang="ts" setup>
import SRadio from '@sakura-ui/components/radio'
</script>
<style lang="scss" scoped></style>
