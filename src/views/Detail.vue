<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="55%" :before-close="handleClose">
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      :disabled="onlySee"
      :rules="rules"
      label-width="120px"
      class="demo-ruleForm"
      :size="formSize"
    >
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="主机序号" prop="date">
            <el-input v-model="ruleForm.date"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="类型" prop="region">
            <el-select v-model="ruleForm.region" placeholder="Activity zone">
              <el-option label="Zone one" value="shanghai"></el-option>
              <el-option label="Zone two" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="主机名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="IP" prop="address">
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12"></el-col>
        <el-col :span="12">
          <el-form-item label="MIC音源组IP" prop="micIp">
            <el-input v-model="ruleForm.micIp"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="MIC音源组端口" prop="micPort">
            <el-input v-model="ruleForm.micPort"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="PC音源组IP" prop="pcIp">
            <el-input v-model="ruleForm.pcIp"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="PC音源组口" prop="pcPort">
            <el-input v-model="ruleForm.pcPort"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="CD音源组IP" prop="cdIp">
            <el-input v-model="ruleForm.cdIp"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="CD音源组口" prop="cdPort">
            <el-input v-model="ruleForm.cdPort"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备用音源组IP" prop="secIp">
            <el-input v-model="ruleForm.secIp"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="备用音源组口" prop="secPort">
            <el-input v-model="ruleForm.secPort"></el-input>
          </el-form-item>
        </el-col>
        <el-form-item label="使用位置" prop="region">
          <el-select v-model="ruleForm.region" placeholder="未定义1/未定义">
            <el-option label="Zone one" value="shanghai"></el-option>
            <el-option label="Zone two" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose(ruleFormRef)">取消</el-button>
        <el-button type="primary" @click="handleSave(ruleFormRef)">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { computed, reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { defineComponent } from 'vue'
import type { ElForm } from 'element-plus'
export default defineComponent({
  emits: ['handleClose', 'handleSave'],
  props: {
    visibleValue: { type: Boolean, default: false },
    datas: { type: Object },
    onlySee: { type: Boolean, default: false }
  },
  setup(props: any, { emit }) {
    console.log('props', props)
    let dialogVisible = ref(false)
    type FormInstance = InstanceType<typeof ElForm>
    const ruleFormRef = ref<FormInstance>()
    const resetForm = (formEl: FormInstance | undefined) => {
      console.log('....')
      if (!formEl) return
      formEl.resetFields()
    }
    const test = (a: any) => {
      console.log('我是test')
    }
    if (props.visibleValue) {
      dialogVisible.value = true
    }
    const handleClose = (formEl: FormInstance | undefined) => {
      test(1)
      resetForm(formEl)
      dialogVisible.value = false
      console.log('关闭事件触发')
      console.log('ruleFormRef', ruleFormRef)
      emit('handleClose', dialogVisible, )
    }
    const handleSave = (formEl: FormInstance | undefined) => {
      dialogVisible.value = false
      console.log('关闭事件触发')
      console.log('ruleFormRef', formEl)
      console.log('ruleForm', ruleForm)
      emit('handleSave', dialogVisible, ruleForm )
    }
    const formSize = ref('default')

    const dataIsNull = () => {
      if (JSON.stringify(props.datas) !== '{}') {
        console.log('props.data', props.datas)
        //  const ruleForm = reactive(props.datas)
      }
    }
    const ruleForm = computed(() => {
      return props.datas
    })
    console.log('data', props.datas)
    // const ruleForm = reactive({
    //   date: '',
    //   name: '',
    //   region: '',
    //   address: '',
    //   micIp: '',
    //   micPort: '',
    //   pcIp: '',
    //   pcPort: '',
    //   cdIp: '',
    //   cdPort: '',
    //   secIp: '',
    //   secPort: ''
    // })
    const rules = reactive({
      name: [
        {
          required: true,
          message: '请输入主机序号',
          trigger: 'blur'
        }
      ],
      date: [
        {
          required: true,
          message: '请输入主机序号',
          trigger: 'blur'
        }
      ],
      address: [
        {
          required: true,
          message: '请输入主机序号',
          trigger: 'blur'
        }
      ],
      micIp: [
        {
          required: true,
          message: '请输入主机序号',
          trigger: 'blur'
        }
      ],
      pcIp: [
        {
          required: true,
          message: '请输入主机序号',
          trigger: 'blur'
        }
      ],
      cdIp: [
        {
          required: true,
          message: '请输入主机序号',
          trigger: 'blur'
        }
      ],
      secIp: [
        {
          required: true,
          message: '请输入主机序号',
          trigger: 'blur'
        }
      ]
    })
    return { dialogVisible, handleClose, handleSave, ruleFormRef, formSize, ruleForm, rules, dataIsNull }
  }
})
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
