// Utilities
import { defineStore } from "pinia";
import Complaint from "@/api/Infomation-client.json";
export const useAppStore = defineStore("complaint", {  
  state: () => ({
    Complaint,
  }), 
  actions: {
    AddComplaint(item) {
      this.Complaint.push(item);
    },
  },
});
