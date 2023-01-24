import { defineStore } from 'pinia';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    leftDrawerOpen: true,
  }),

  actions: {
    toogleLeftDraw() {
      this.leftDrawerOpen = !this.leftDrawerOpen;
    },
  },
});
