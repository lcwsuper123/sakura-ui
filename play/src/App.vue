<template>
    <!--<s-text></s-text>-->
    <p class="s-title">
        <span class="s-title__data">data1</span>
        <span class="s-title__sex">sex</span>
        <span class="s-title__sex--success">sex-success</span>
        <span class="s-title__sex--error">sex-error</span>
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

@include b(title) {
    color: pink;
    display: flex;
    flex-flow: column;
    //#{getCssVarName('text', 'error', 'color')}: orangered;
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
    }
    @include when(active){
        background-color: pink;
    }
}
.#{bem('title', 'sex', 'error')} {
    //color: getCssVar('text', 'error', 'color');
    color: getCssVarWithDefault(('text', 'error', 'color'), orange);
}
</style>
