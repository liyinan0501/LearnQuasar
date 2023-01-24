<template>
  <h1>{{ count }}</h1>
  <h1 class="color">{{ dCount }}</h1>
  <button @click="add">add</button>
  <q-btn @click="toStyle">Go flex Page</q-btn>
</template>

<script setup>
import { ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
const $router = useRouter();
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
function toStyle() {
  $router.push('/flex');
}
</script>
<style>
.color {
  color: v-bind(color);
}
</style>
