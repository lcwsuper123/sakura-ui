<template>
    <s-text
        tag="p"
        type="success"
    >
        success
    </s-text>
    <s-text
        tag="p"
        type="warning"
    >
        warning
    </s-text>
    <s-text
        tag="p"
        type="info"
    >
        info
    </s-text>
    <s-text
        tag="p"
        size="small"
    >
        small
    </s-text>
    <div class="max-width-100">
        <s-text
            truncated
        >
            truncatedtruncatedtruncatedtruncated
        </s-text>
    </div>
    <div class="max-width-100">
        <s-text
            tag="p"
            :multiline="3"
        >
            multilinemultilinemultilinemultilinemultiline
        </s-text>
    </div>
</template>

<script setup lang="ts">
import SText from '@sakura-ui/components/text'
</script>


<style scoped lang="scss">
.max-width-100 {
    width: 100px;
}
</style>
