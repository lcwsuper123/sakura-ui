<template>
    <s-button
        tag="a"
        href="https://github.com/element-plus/element-plus"
        target="_blank"
    >
        DEFAULT
    </s-button>
    <s-button
        type="success"
        disabled
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
        disabled
        plain
    >
        disableddisableddisableddisabled
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
    >
        circle
        <!--cir-->
    </s-button>
    <s-button
        loading
        type="primary"
    >
        loading
    </s-button>
    <s-button
        circle
        type="primary"
        :icon="Search"
    />
    <s-button
        :color="customColor"
    >
        custom-color
    </s-button>
    <s-button
        text
    >
        text
    </s-button>
    <s-button
        text
        text-background
    >
        text
    </s-button>
    <s-button
        text
        text-background
        type="primary"
    >
        background--text
    </s-button>
    <s-button
        text
        text-background
        type="success"
        disabled
    >
        disabled--text
    </s-button>
    <s-button
        text
        text-background
        :color="customColor"
        disabled
        size="small"
    >
        custom-color--text
    </s-button>
    <s-button-group
        type="primary"
    >
        <s-button
            ref="customButton"
        >
            custom-color--text
        </s-button>
        <s-button
            ref="customButton"
        >
            custom-color--text
        </s-button>
        <s-button
            ref="customButton"
        >
            custom-color--text
        </s-button>
    </s-button-group>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SButton, { SButtonGroup } from '@sakura-ui/components/button'
import { Edit, Search } from '@element-plus/icons-vue'

const customColor = ref('#626aef')
const customButton = ref(null)
</script>


<style scoped lang="scss">
</style>
