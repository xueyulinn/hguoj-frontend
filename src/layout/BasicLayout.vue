<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from "@/components/GlobalHeader";
</script>

<style scoped>
#basicLayout {
}

.header {
  margin-bottom: 16px;
  //box-shadow: #eee 1px 1px 5px;
}

.content {
  background: linear-gradient(to right, #ddd, #fff);
  padding: 30px;
  margin-bottom: 16px;
}

.footer {
  background: #efefef;
  padding: 16px;
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
