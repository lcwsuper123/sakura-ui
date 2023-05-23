import { describe, expect, it } from 'vitest'
import Radio from '../src/radio.vue'
import { mount } from '@vue/test-utils'

describe('Radio.vue', () => {
    it('create', () => {
        const wrapper = mount(() => <Radio />)
        expect(wrapper.classes()).toContain('s-radio')
    })
    it('size', () => {
        const wrapper = mount(() => <Radio />)
        expect(wrapper.classes()).toContain('s-radio--default')
    })
})
