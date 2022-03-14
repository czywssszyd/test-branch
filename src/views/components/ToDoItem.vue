<template>
  <div>
    我是第三层接收到父组件的user: {{user}}
    <hr>
    <button @click="changeUser">子组件改变父组件中的user</button>
  </div>
</template>

<script>
import { ref, inject } from 'vue'
export default {
  // inject: ['user'],
  // 在setup使用inject也需要先显式导入inject
  setup() {
    const user = inject('user', user)
    const updateUser = inject('updateUser')
    return {
      user,
      updateUser
    }
  },
  methods: {
    changeUser() {
      this.updateUser() // 这种方法是调用父组件的方法，即使使用readonly也能修改
      // 看起来是在子组件中修改的，实际上本质是在父组件中修改的

      // 如果直接在子组件中修改会怎么样？也是可以做到响应式啊！
      // this.user = this.user + '2'
      // 这种方法是直接在子组件中修改，但是加上readonly后就无法修改了
    }
  }
}
</script>

<style>

</style>