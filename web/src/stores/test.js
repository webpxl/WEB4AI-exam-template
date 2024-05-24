import { defineStore } from 'pinia';
import axios from 'axios';

export const useTestStore = defineStore('test', {
  state: () => {
    return {
      info: {},
    }
  },

  actions: {
    async fetchInfo() {
      try {
        const response = await axios.get(`http://localhost:8000/msg/1`);
        this.info = response.data;
      } catch (error) {
        console.log("Something went wrong!")
      }
    },
  },
});