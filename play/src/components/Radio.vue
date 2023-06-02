<template>
    demo2--{{ demo2 }}
    <s-radio-group
        v-model="demo2"
        size="small"

    >
        <s-radio
            model-value="1"
            label="option1"
        >
            option1
        </s-radio>
        <s-radio
            label="option2"
        >
            option1
        </s-radio>
        <s-radio
            label="option3"
            size="large"
        >
            option3
        </s-radio>
    </s-radio-group>
    <s-radio-group size="large" v-model="demo">
        <s-radio-button
            label="a"
            disabled
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
        <s-radio-button
            v-model="demo"
            label="a"
        >你好
        </s-radio-button>
    </div>
</template>
<script lang="ts" setup>
import { provide, ref } from 'vue'
import SRadio, { SRadioButton, SRadioGroup } from '@sakura-ui/components/radio'

const demo = ref('')
const demo2 = ref('')
</script>
<style lang="scss" scoped></style>
