<template>
    <!--<s-text></s-text>-->
    <p class="s-title">
        <span class="s-title__data">data1</span>
        <span class="s-title__sex">sex</span>
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
    @include e(data) {
        color: red;
    }
}
@include b('title::before') {
    content: "";
    width: 100px;
    height: 100px;
    background-color: rebeccapurple;
    display: block;
}
$demo: str-slice('.selector-data_title', 2, -2);
#{$demo}{
    width: 100px;
}
</style>
