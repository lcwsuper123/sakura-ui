<template>
   <i class="xbb-icon">
      <slot></slot>
   </i>
</template>
<script setup lang="ts" name="SakuraIcon">
import { iconProps } from './icon'
// import { computed, defineComponent, ExtractPropTypes } from 'vue'
// type IconProps = ExtractPropTypes<typeof iconProps>
// const props = defineProps<IconProps>()
const props = defineProps(iconProps)
</script>