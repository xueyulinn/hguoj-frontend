<script setup lang="ts">
import gfm from "@bytemd/plugin-gfm";
import { Editor } from "@bytemd/vue-next";
import { defineProps, withDefaults } from "vue";
import highlight from "@bytemd/plugin-highlight";

interface Props {
  value: string;
  handleChange: (v: string) => void;
}

// 指定默认值
const props = withDefaults(defineProps<Props>(), {
  value: () => "",
  handleChange: (v: string) => {
    console.log(v);
  },
});

const plugins = [
  gfm(),
  highlight(),
  // Add more plugins here
];
</script>

<template>
  <Editor :value="value" :plugins="plugins" @change="handleChange" />
</template>

<style scoped></style>
