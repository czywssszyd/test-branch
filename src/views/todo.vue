<template>
  <div>
    <div>我是第一层</div>
    <div>我是user: {{user}}</div>
    <button @click="handle">点击改变user的值</button>
    <hr>
    <to-do-list />
  </div>
</template>

<script>
import { computed, ref, provide, readonly } from 'vue'
import ToDoList from './components/ToDoList.vue'
export default {
  components: { ToDoList },
  // provide: {
  //   user: '姚思远', // 注意这里是写死的，如果要传一些组件实例的property，这将是不起作用的
  //   // age: this.user // Cannot read properties of undefined (reading 'user')
  // },
  // 要访问组件实例的property，我们需要将provide转换为返回对象的函数，类似vue2中的data
  // 注意此时仍然不是响应式的！只是能传组件实例的property了
  // 我们可以通过传递一个 ref property 或 reactive 对象给 provide 来改变这种行为。
  // provide() {
  //   return {
  //     // 利用computed将其变为响应式 具体原因后面再分析
  //     user: computed(() => this.user)
  //   }
  // },
  // 在setup中使用provide, 需要先导入provide
  setup() {
    const user = ref('姚思远')
    // provide('user', user) // 在setup中使用provide, 自动变为响应式！
    // 最后，如果要确保通过 provide 传递的数据不会被 inject 的组件更改，
    // 我们建议对提供者的 property 使用 readonly。
    // 使用readonly后不是不能修改，可以在provide组件中修改，在inject组件中不能修改
    provide('user', readonly(user))
    const updateUser = () => {
      user.value = user.value + '2'
    }
    provide('updateUser', updateUser)
    return {
      user,
      updateUser
    }
  },
  methods: {
    // 当使用响应式provide/inject值时，建议尽可能将对响应式property的所有修改限制在定义provide的组件内部
    // 然而，有时我们需要在注入数据的组件内部更新inject的数据，在这种情况下，我们建议provide一个方法来负责
    // 响应式改变property
    handle() {
      this.user = this.user + '1'
      // 可以看到provide和inject并不是响应式的
    }
  }
}
</script>

<style>

</style>