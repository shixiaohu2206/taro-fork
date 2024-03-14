import { hooks } from '@tarojs/shared'
import { batch } from 'solid-js'

import { ensureIsArray } from './utils'

import type { TaroNode } from '@tarojs/runtime'

export type Component = (props?: any) => TaroNode

export function setReconciler () {
  hooks.tap('batchedEventUpdates', function (cb) {
    batch(cb)
  })

  hooks.tap('mergePageInstance', function (prev, next) {
    if (!prev || !next) return

    // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。

    // prev 使用 Object.create(null) 创建，H5 的 fast-refresh 可能也会导致存在 prev，要排除这些意外产生的 prev
    if ('constructor' in prev) return

    Object.keys(prev).forEach(item => {
      const prevList = prev[item]
      const nextList = ensureIsArray<() => any>(next[item])
      next[item] = nextList.concat(prevList)
    })
  })
}
