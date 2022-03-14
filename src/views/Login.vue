<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="#" type="index" />
      <el-table-column label="主机序号" prop="date" />
      <el-table-column label="主机名称" prop="name" />
      <el-table-column label="IP" prop="address" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleSee(scope.$index, scope.row)">查看</el-button>
          <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        background
        layout="total, sizes, prev, next, jumper"
        :total="2"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <!-- <div>{{visibleValue}}</div> -->
    <div v-if="visibleValue">
      <Detail :visible-value="visibleValue" :only-see="onlySee" :datas="datas" @handleClose="handleClose" @handleSave="handleSave" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { ref, computed } from 'vue'
import Detail from '@/views/Detail.vue'
export default defineComponent({
  name: 'Login',
  components: {
    Detail
  },
  data() {
    return {
      datas: {},
      activeIndex: 0
    }
  },
  setup() {
    let visibleValue = ref(false)
    let onlySee = ref(false)
    let arr: User[] = [
      {
        date: '111',
        name: '1110',
        address: '1.1.1.1',
        region: '',
        micIp: '',
        micPort: '',
        pcIp: '',
        pcPort: '',
        cdIp: '',
        cdPort: '',
        secIp: '',
        secPort: ''
      },
      {
        date: '1',
        name: '测试广播主机',
        address: '192.168.100.117',
        region: '',
        micIp: '',
        micPort: '',
        pcIp: '',
        pcPort: '',
        cdIp: '',
        cdPort: '',
        secIp: '',
        secPort: ''
      }
    ]
    let tableData = reactive(arr)
    // const handleSee = (index: number, row: User) => {
    //   visibleValue.value = true
    //   console.log('visibleValue', visibleValue)
    //   const data = reactive(tableData[index])
    //   return data
    // }
    // const handleEdit = (index: number, row: User): any => {
    //   console.log(index, row)
    //   visibleValue.value = true
    //   const data = reactive(tableData[index])
    //   console.log('data-inLogin', data)
    //   return data
    // }
    const handleDelete = (index: number, row: User) => {
      console.log(index, row)
      tableData.splice(index, 1)
    }
    const handleClose = (val: any) => {
      visibleValue.value = val.value
      onlySee.value = false
    }
    return { visibleValue, onlySee, tableData, handleDelete, handleClose }
  },
  methods: {
    handleEdit(index: number, row: User): any {
      this.visibleValue = true
      this.datas = reactive(this.tableData[index])
      console.log('datas', this.datas)
      this.activeIndex = index
    },
    handleSee(index: number, row: User): any {
      this.onlySee = true
      this.visibleValue = true
      this.datas = reactive(this.tableData[index])
    },
    handleSave(val: any, val2: any, activeIndex: number): any {
      this.visibleValue = val.value
      this.tableData[activeIndex] = val2
    }
  }
})
interface User {
  date: string
  name: string
  address: string
  region: string
  micIp: string
  micPort: string
  pcIp: string
  pcPort: string
  cdIp: string
  cdPort: string
  secIp: string
  secPort: string
}

const search = ref('')
// const filterTableData = computed(() =>
//   tableData.filter(data => !search.value || data.name.toLowerCase().includes(search.value.toLowerCase()))
// )
</script>
