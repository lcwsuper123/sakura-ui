import { markRaw, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import Button from '../src/button.vue'
import type { ComponentSize } from '@sakura-ui/constants'

describe('Button.vue', () => {
    it('create', () => {
        const wrapper = mount(() => <Button type="primary"/>)
        expect(wrapper.classes()).toContain('s-button--primary')
        // expect(true).toBe(true)
    })
})
