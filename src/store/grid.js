// Utilities
import { defineStore } from 'pinia'
import products from "@/api/db.json"
import { useLocalStorage } from "@vueuse/core"
export const useAppStore = defineStore('grid', {
  state: () => {
    return {
      products,       
      Info:useLocalStorage("Info", []),
    }
  }, 
  getters:{
    NewReleases(){
      const sort =  this.products.sort((a,b) => a.release_date_unix-b.release_date_unix)
      return sort.slice(0,10)
    }

  },
  actions:{
    GetInfo(id){
      this.Info = this.products.find(value => value.id === id)      
    }
  }
})
