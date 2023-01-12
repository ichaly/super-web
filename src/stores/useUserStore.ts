import { defineStore } from 'pinia'

const USER_INFO = {
  id: 1,
  gender: 'Male',
  userName: 'iChaly'
}

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = reactive(USER_INFO)
  return {
    userInfo
  }
})
