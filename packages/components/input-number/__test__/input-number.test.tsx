import { describe, expect, it } from 'vitest'
import InputNumber from '../src/input-number.vue'
import { mount } from '@vue/test-utils'

describe('InputNumber.vue', () => {
    it('create', () => {
        const wrapper = mount(() => <InputNumber />)
        expect(wrapper.classes()).toContain('s-input-number')
    })
    it('size', () => {
        const wrapper = mount(() => <InputNumber size="small" />)
        expect(wrapper.classes()).toContain('s-input-number--small')
    })
    it('disabled', () => {
        const wrapper = mount(() => <InputNumber disabled />)
        expect(wrapper.classes()).toContain('is-disabled')
    })
})