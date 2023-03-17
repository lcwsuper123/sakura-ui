export type Writable<T> = { -readonly [P in keyof T]: T[P] }
export type WritableArray<T> = T extends readonly any[] ? Writable<T> : T
/**
 * 是否是never类型
 */
export type IfNever<T, Y = true, N = false> = [T] extends [never] ? Y : N
/**
 * 是否是unknown类型
 */
export type IfUnknown<T, Y, N> = [unknown] extends [T] ? Y : N
/**
 * 将know类型转换为never类型
 */
export type UnknownToNever<T> = IfUnknown<T, never, T>