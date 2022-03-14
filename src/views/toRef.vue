<template>
  <div>
    <p>{{state}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
 * 1. toRef
 */
import { reactive, ref, toRef } from 'vue'
export default {
  setup() {
    const obj = { name: 'ysy', age: 18 }

    // const state = ref(obj.name)
    const state = toRef(obj, 'name')
    /**
     * 如果利用ref将某一个对象中的属性变成响应式的数据
     * 我们修改响应式的数据是不会影响到原始数据的， 相当于复制了一份
     */
    // const state = ref(obj)
    function myFn() {
      state.value = '姚思远'
      // state.value.name = '姚思远'
      console.log('obj', obj) // 会被修改
      console.log('state', state) // 会被修改
    }
    /**
     * 通过toRef来将某一对象中的属性变成响应式的，修改响应式的值，会影响到原始对象
     * 但是并不会触发ui更新
     */
    return {
      state,
      myFn
    }
  }
}
</script>

<style>
</style>