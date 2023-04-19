<template>
    <s-text
        tag="p"
        type="primary"
        size="large"
    >
        primary
    </s-text>
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
    <s-button
    >
        DEFAULT
    </s-button>
    <s-button
        type="success"
    >
        success
    </s-button>
    <s-button
        type="primary"
    >
        primary
    </s-button>
    <s-button
        type="info"
    >
        info
    </s-button>
    <s-button
        plain
        round
    >
        plain
    </s-button>
    <s-button
        plain
        type="primary"
    >
        primary-plain
    </s-button>
    <s-button
        plain
        type="success"
    >
        success-plain
    </s-button>
    <s-button
        type="success"
        plain
        round
    >
        success-round
    </s-button>
    <s-button
        type="danger"
        round
        plain
        disabled
    >
        disabled
    </s-button>
    <s-button
        size="large"
        round
    >
        large
    </s-button>
    <s-button
        size="default"
    >
        default
    </s-button>
    <s-button
        size="small"
        round
    >
        small
    </s-button>
    <s-button
        circle
        type="success"
        plain
    >
        circle
        <!--cir-->
    </s-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SText from '@sakura-ui/components/text'
import SButton from '@sakura-ui/components/button'

const prop = ref('width')
</script>


<style scoped lang="scss">
.max-width-100 {
    width: 100px;
}
</style>
