<template>
    <s-text
        tag="p"
        type="success"
    >
        内容
    </s-text>
    <s-text
        tag="p"
        type="warning"
    >
        内容
    </s-text>
    <s-text
        tag="p"
        type="info"
    >
        内容
    </s-text>
    <p class="s-title">
        <span class="s-title__data">data1</span>
        <span class="s-title__sex">sex</span>
        <span class="s-title__sex--success">sex-success</span>
        <span class="s-title__sex--error">sex-error</span>
        <span class="s-title__sex--primary">sex-primary-color</span>
    </p>
    <p class="s-title is-active">
        <span class="s-title__data">when</span>
    </p>
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import SText from '@sakura-ui/components/text'
</script>


<style scoped lang="scss">
//@import '@sakura-ui/theme-chalk/src/mixins/config.scss';
//@import '@sakura-ui/theme-chalk/src/mixins/function.scss';
@import '@sakura-ui/theme-chalk/src/mixins/mixins.scss';
@import '@sakura-ui/theme-chalk/src/mixins/_var.scss';
@include b(title) {
    color: pink;
    display: flex;
    flex-flow: column;
    @include set-css-color-rgb(primary);
    //#{getCssVarName('text', 'error', 'color')}: orangered;
    @include set-css-var-value(('text', 'error', 'color'), green);
    @include e(data) {
        color: red;
    }
    @include m(success) {
        color: yellowgreen;
    }
    @include e(sex) {
        color: blue;
        @include m(success) {
            color: yellowgreen;
        }
        @include m('primary') {
            color: rgb(getCssVar('color', 'primary', 'rgb'));
        }
    }
    @include when(active){
        background-color: pink;
    }
}
.#{bem('title', 'sex', 'error')} {
    color: getCssVar('text', 'error', 'color');
    //color: getCssVarWithDefault(('text', 'error', 'color'), orange);
}
</style>
