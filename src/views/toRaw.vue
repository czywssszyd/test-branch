<template>
  <div>
    <p>{{state}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
 * 1. toRaw 获取被ref或者reactive包装过后的对象的原始引用(初始对象)，因为
 * ref和reactive每次修改都会更新，非常消耗性能，某些操作不需要更新ui界面时可以修改原始对象，toRaw就是获取这个
 * 原始对象的方法！
 */
import {reactive, ref, toRaw} from 'vue'
export default {
  setup() {
    const obj = {name: 'ysy', age: 18}
    // const state = reactive(obj)
    // console.log(obj === state) // false
    // obj和state是引用关系， state的本质是一个Proxy对象，在这个Proxy对象中引用了obj
    const state = ref(obj)
    const obj2 = toRaw(state.value)
    console.log('obj', obj)
    // 要想通过toRaw获取ref的原始数据，要用。value属性
    console.log('state', state)
    console.log('obj2', obj2)
    // console.log(obj === obj2) // true
    function myFn() {
      // 如果我通过引用来修改数据呢？比如我直接修改obj中的数据
      // obj.name = 'hahaha'
      // console.log('obj', obj) // {name: 'hahaha', age: 18}
      // console.log('state', state) // Proxy {name: 'hahaha', age: 18}
      // 数据确实可以改变，但是界面却未发生响应式更新，因为不是通过proxy代理的！！
      // state.name = 'ZZ'
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