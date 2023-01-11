import { defineStore } from 'pinia'

const USER_INFO = {
  id: 1,
  sex: '男',
  userName: 'iChaly'
}

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = reactive(USER_INFO)
  return {
    userInfo
  }
})
