<template>
  <h1>{{ count }}</h1>
  <h1 class="color">{{ dCount }}</h1>
  <button @click="add">add</button>
</template>

<script>
import { defineComponent, ref, watch, computed } from 'vue';

export default defineComponent({
  setup() {
    let count = ref(0);
    let color = ref('red');
    function add() {
      count.value++;
    }
    let dCount = computed(() => {
      return count.value * 2;
    });
    watch(count, () => {
      // alert('sss');
      if (count.value % 2 === 0) color.value = 'red';
      else color.value = 'green';
    });
    return {
      defineComponent,
      ref,
      watch,
      computed,
      count,
      color,
      add,
      dCount,
    };
  },
});
</script>
<style>
.color {
  color: v-bind(color);
}
</style>
