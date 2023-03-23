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
$namespaces: 's';
$common-separator: '-';
$element-separator: '__';
// s-text
@mixin b($block) {
    $B: $namespaces + $common-separator + $block !global;
    .#{$B} {
        @content;
    }
}

// s-text__title
@mixin e($element) {
    $E: $element !global;
    $selector: &;
    $currentSelector: '';
    @each $unit in $element {
        $currentSelector: #{
            $currentSelector + '.' + $B + $element-separator + $unit + ','
        }
    }
    #{$currentSelector} {

    }

}

@include b(title) {
    color: pink;
    //@include e(data) {
    //    color: pink;
    //}
}
</style>
