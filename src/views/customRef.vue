<template>
  <div>
    <p>{{state}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
 * 1. customRef 返回一个ref对象，可以显式地控制依赖追踪和触发响应
 */
import { ref, customRef } from 'vue'
function myRef(value) {
  return customRef((track, trigger) => {
    return {
      get() {
        track(); // 告诉vue这个数据是需要追踪变化的
        console.log('get', value)
        return value
      },
      set(newValue) {
        console.log('set', newValue)
        value = newValue
        trigger(); // 告诉vue触发界面更新
      }
    }
  })
}
export default {
  setup() {

    const state = myRef(18)
    function myFn() {
      state.value ++
      // console.log('state', state)
    }
    return {
      state,
      myFn
    }
  }
}
</script>

<style>
</style>