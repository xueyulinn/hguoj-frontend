<template>
  <a-row
    class="grid-demo"
    id="globalHeader"
    style=""
    align="center"
    :wrap="false"
  >
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/hgulogo.jpg" />
            <div class="title">HGUOJ</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import routes from "@/router/routes";
import { useRoute, useRouter } from "vue-router";
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import checkAuth from "@/auth/checkAuth";
import authEnum from "@/auth/authEnum";

const router = useRouter();
const store = useStore();

const visibleRoutes = computed(() => {
  return routes.filter((item) => {
    if (item.meta?.hide) {
      return false;
    }

    // 判断用户有没有访问页面的权限 从路由和用户两方面
    return checkAuth(store.state.user.loginUser, item?.meta?.access as string);
  });
});

//默认主页
const selectedKeys = ref(["/"]);

//路由跳转时更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path];
});

setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "管理员",
    userRole: authEnum.ADMIN,
  });
}, 3000);

const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.logo {
  height: 78px;
}

.title {
  color: #444;
}
</style>
