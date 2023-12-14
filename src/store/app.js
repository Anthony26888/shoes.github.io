// Utilities
import { defineStore } from 'pinia'
import products from "@/api/product.json"
import { useLocalStorage } from "@vueuse/core"
export const useAppStore = defineStore('app', {
  state: () => {
    return {
      products,       
      Info:useLocalStorage("Info", []),
    }
  }, 
  getters:{
    Linx(){
      return this.products.filter(value => value.model=="Linx")
    },
    Hitachi(){
      return this.products.filter(value => value.model=="Hitachi")
    }  

  },
  actions:{
    GetInfo(id){
      this.Info = this.products.find(value => value.id === id)      
    }
  }
})
