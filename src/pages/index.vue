<template>
  <div>
    <div class="notification">
      姓名：{{ userInfo.userName }} 性别：{{ userInfo.sex }}
      <el-button type="primary" class="ml-4"> 退出 </el-button>
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
  @apply fixed flex w-full items-center justify-center bg-emerald-400 py-1 text-white;
}
</style>
