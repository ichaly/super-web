<template>
  <div>
    <div class="notification">
      Name：{{ userInfo.userName }} Gender：{{ userInfo.gender }}
      <el-button type="primary" class="ml-4">Exit</el-button>
    </div>
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { useUserStore } from '@/stores/useUserStore'

const userInfo = useUserStore().userInfo
</script>

<style scoped lang="scss">
.notification {
  @apply z-9999 fixed  flex w-full items-center justify-center bg-emerald-400 py-1 text-white;
}
</style>
