<template>
    <div class="input">
        value---{{ value }}
        <s-input
            v-model="value"
            placeholder="请输入"
        />
        <s-input size="small" />
        <s-input size="large" />
        <s-input
            size="large"
            disabled
            placeholder="disabled"
            model-value="111"
        />
        <s-input
            v-model="value"
            size="large"
            :prefix-icon="Search"
            :suffix-icon="Loading"
        />
        <s-input
            v-model="value"
            clearable
        />
        <s-input
            v-model="value"
            :parser="value => value + 1"
            :formatter="value => value + 2"
        />
        <s-input
            v-model="value"
            show-password
        />
        <s-input
            v-model="value"
            :maxlength="10"
        >
            <template #prepend>
                22222222222
            </template>
            <template #append>
                22222222222
            </template>
        </s-input>
        <s-input
            v-model="value"
            :maxlength="10"
            show-word-limit
        />
        <s-input
            v-model="value"
            type="textarea"
        />
        <s-input
            v-model="value"
            type="textarea"
            :maxlength="10"
            show-word-limit
            disabled
        />
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import SInput from '@sakura-ui/components/input'
import { Search, Loading } from '@element-plus/icons-vue'
const value = ref('')
</script>
<style scoped lang="scss">
.input {
    width: 50vw;
    display: flex;
    flex-flow: column;

    .s-input, .s-textarea {
        margin-bottom: 20px;
    }
}
</style>