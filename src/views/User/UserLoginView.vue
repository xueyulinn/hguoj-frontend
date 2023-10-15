<template>
  <div class="userLoginView">
    <a-form
      style="max-width: 480px; margin: 0 auto"
      label-align="left"
      auto-label-width
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入账号" />
      </a-form-item>
      <a-form-item field="userPassword" tooltip="密码不少于8位" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService } from "../../../generated";
import store from "@/store";
import { Message } from "@arco-design/web-vue";

const form = reactive({
  userAccount: "",
  userPassword: "",
});
const handleSubmit = async () => {
  const rs = await UserControllerService.userLoginUsingPost(form);
  if (rs.code === 0) {
    //修改用户登录状态
    await store.dispatch("user/getLoginUser", form);
    //跳转到首页
    window.location.href = "/";
  } else {
    Message.error("登录失败" + rs.message);
  }
};
</script>
