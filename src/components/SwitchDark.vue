<script setup lang="ts">
import { ElIcon, ElRadioButton, ElRadioGroup } from 'element-plus';
import { useColorMode } from '@vueuse/core';
import { Moon, Sunny, Platform } from '@element-plus/icons-vue';
const { store: colorMode } = useColorMode();
</script>
<template>
  <ElRadioGroup v-model="colorMode" :size="'small'">
    <ElRadioButton value="dark" title="Dark">
      <ElIcon><Moon></Moon></ElIcon>
    </ElRadioButton>
    <ElRadioButton value="auto" title="System">
      <ElIcon><Platform></Platform></ElIcon>
    </ElRadioButton>
    <ElRadioButton value="light" title="Light">
      <ElIcon><Sunny></Sunny></ElIcon>
    </ElRadioButton>
  </ElRadioGroup>
</template>
