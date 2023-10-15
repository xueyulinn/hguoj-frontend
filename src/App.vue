<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <router-view />
    </template>
    <template v-else>
      <BasicLayout />
    </template>
  </div>
</template>
<style>
#app {
}
</style>
<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import BasicLayout from "@/layout/BasicLayout.vue";

const route = useRoute();

/**
 * 全局初始化函数，有全局单词调用的代码都写到这里
 */
const doInit = () => {
  console.log("欢迎来到我的APP");
};

onMounted(() => {
  doInit();
});
</script>
