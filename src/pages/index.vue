<template>
  <div>
    <div class="notification">
      姓名：{{ userInfo.userName }}
      性别：{{ userInfo.sex }}
      <el-button type="primary">Default</el-button>
    </div>
    <NuxtWelcome/>
  </div>
</template>

<script setup lang="ts">
import {ElButton} from "element-plus"
import {useUserStore} from '@/stores/useUserStore'

const userInfo = useUserStore().userInfo
</script>

<style scoped lang="scss">
.notification {
  @apply text-white text-center bg-emerald-400 py-1 fixed w-full;
}
</style>
