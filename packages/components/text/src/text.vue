<template>
   <p
       :class="[
           ns.b(''),
           ns.m('success'),
           ns.bm('', 'success')
       ]"
   >
      text
      <span :class="[
          ns.e('title'),
          ns.em('title', 'success')
      ]">
         title
         <a
             :class="[
                ns.be('title', 'data'),
                ns.bem('title', 'data', 'success')
            ]"
         >
            title-data
         </a>
      </span>
   </p>
</template>

<script lang="ts" setup name="SText">
import { ref } from 'vue'
import { textProps } from './text'
import { useNamespace } from '@sakura-ui/hooks/index'

defineProps(textProps)
const ns = useNamespace('text')
console.log(ns.is('loading', true))
console.log(ns.cssVar({
   'background': 'pink',
   'borderRadius': '24px'
}))
console.log(ns.cssBlockVar('text',{
   'background': 'pink',
   'borderRadius': '24px'
}))
</script>
