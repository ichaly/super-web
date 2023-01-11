<template>
  <div class="text-white text-center bg-lime-500 py-1 fixed w-full">
    姓名：{{ userInfo.userName }}
    性别：{{ userInfo.sex }}
  </div>
  <NuxtWelcome/>
</template>

<script setup lang="ts">
import {useUserStore} from '@/stores/useUserStore'

const userInfo = useUserStore().userInfo
</script>

<style scoped>
</style>
