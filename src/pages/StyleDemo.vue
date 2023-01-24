<template>
  <q-page padding="">
    <!-- <div class="box text-primary q-ma-sm-sm q-ma-lg-lg" style="height: 2000px"> -->
    <div>Lorem</div>
    <div>leeee</div>
    <button @click="$q.dark.toggle()">Change</button>
    <div>
      <q-btn @click="show = !show" label="click"></q-btn>
      <transition
        appear
        enter-active-class="animated rotateOutDownRight"
        leave-active-class="animated rotateOutDownRight"
      >
        <!-- Wrapping only one DOM element, defined by QBtn -->
        <q-btn v-show="show" color="secondary" icon="mail" label="Email" />
      </transition>
    </div>
    <div>
      <q-btn @click="$hide.toogleLeftDraw">Hide side drawer</q-btn>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useLayoutStore } from 'src/stores/layout';
let show = ref(true);
const $q = useQuasar();
const $hide = useLayoutStore();
</script>
<style>
/* .box {
  width: 600px;
} */
</style>
