import Input from '../src/input.vue'
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

describe('Input.vue', () => {
    it('create', () => {
        const wrapper = mount(() => <Input />)
        expect(wrapper.classes()).toContain('s-input')
    })
})