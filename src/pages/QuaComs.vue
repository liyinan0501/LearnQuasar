<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        dense
        push
        color="white"
        text-color="black"
        label="Standard"
        @click="handleBack"
      />
      <q-btn flat color="primary" label="Primary" />
      <q-btn outline rounded color="secondary" label="Secondary" />
      <q-btn size="17px" round color="amber" glossy label="Amber" />
      <q-btn
        :loading="isloading"
        :percentage="percent"
        color="brown-5"
        label="Brown 5"
      />
      <q-btn
        ref="myBtn"
        @click="handleClick"
        color="deep-orange"
        glossy
        label="Deep Orange"
      />
      <q-btn :loading="true" color="purple" label="Purple" size="">
        <template v-slot:loading>
          <q-spinner-gears class="on-left" />
          Computing...
        </template>
      </q-btn>
      <q-btn target="_blank" color="black" label="Black" to="/flex" />
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { QPage, QBtn } from 'quasar';
import { ref } from 'vue';

let myBtn = ref<QBtn>();

let isloading = ref(false);
let percent = ref(0);
function handleClick() {
  percent.value = 0;
  isloading.value = !isloading.value;
  setInterval(() => {
    percent.value += 10;
  }, 200);
}
function handleBack() {
  myBtn.value?.click();
}
</script>

<!-- <script lang="ts" setup>
import { QPage, QBtn } from 'quasar';
import { ref } from 'vue';

let myBtn = ref();

let isloading = ref(false);
let percent = ref(0);
function handleClick() {
  percent.value = 0;
  isloading.value = !isloading.value;
  setInterval(() => {
    percent.value += 10;
  }, 200);
}
function handleBack() {
  myBtn.value?.click();
}
</script> -->

<!-- Options API -->
<!-- <script>
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    handleBack() {
      const dom = this.$refs.myBtn;
      dom.click();
    },
  },
});
</script> -->
