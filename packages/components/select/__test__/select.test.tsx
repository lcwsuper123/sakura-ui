import { describe, expect, it } from 'vitest'
import Select from '../src/select.vue'
import { mount } from '@vue/test-utils'

describe('Select.vue', () => {
    it('create', () => {
        const wrapper = mount(() => <Select />)
        expect(wrapper.classes()).toContain('s-select')
    })
    it('size', () => {
        const wrapper = mount(() => <Select size="large" />)
        expect(wrapper.classes()).toContain('s-select--large')
    })
})