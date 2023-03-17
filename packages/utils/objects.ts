import { get, set } from 'lodash-unified'
import type { Entries } from 'type-fest'

export { hasOwn } from '@vue/shared'
export const keysOf = <T>(value: T) => Object.keys(value) as Array<keyof T>

export const entriesOf = <T>(value: T) => Object.entries(value) as Entries<T>