<template>
  <div class="login">
    <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item label="用户名" v-bind="validateInfos.username">
        <a-input v-model:value="modelRef.username" />
      </a-form-item>
      <a-form-item label="密&nbsp;&nbsp;&nbsp;&nbsp;码" v-bind="validateInfos.password">
        <a-input v-model:value="modelRef.password" type="password" />
      </a-form-item>
      <a-form-item label="验证码" v-bind="validateInfos.verifyCode">
        <a-input v-model:value="modelRef.verifyCode" />
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 8 }">
        <a-button type="primary" @click.prevent="onSubmit">登录</a-button>
        <a-button style="margin-left: 24px" @click="resetFields">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue'
import { useRouter } from 'vue-router'
import { useForm } from '@ant-design-vue/use'
import { Form } from 'ant-design-vue'

export default defineComponent({
  name: 'Login',
  components: {
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
  },
  setup() {
    const router = useRouter()
    const modelRef = reactive({
      username: '',
      password: '',
      verifyCode: '',
    })

    const rulesRef = reactive({
      username: [{ required: true, message: '请输入用户名' }],
      password: [{ required: true, message: '请输入密码' }],
      verifyCode: [{ required: true, message: '请输入验证码' }],
    })

    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)

    const onSubmit = () => {
      validate()
        .then(() => {
          console.log('submit!', toRaw(modelRef))
          router.replace({ path: '/dashboard' })
        })
        .catch(err => {
          console.log('submit!', err)
        })
    }
    return {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
      resetFields,
      validate,
      validateInfos,
      modelRef,
      onSubmit,
    }
  },
})
</script>
