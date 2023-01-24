<template>
  <router-view />
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { RouterView } from 'vue-router';

// console.log(process.env.API);
// console.log(process.env.SECRET);
// console.log(process.env.SASS);

const $q = useQuasar();

// Example of adding support for
// <q-icon name="app:...." />
// This includes support for all "icon" props
// of Quasar components

$q.iconMapFn = (iconName) => {
  // iconName is the content of QIcon "name" prop

  // your custom approach, the following
  // is just an example:
  if (iconName.startsWith('icon-') === true) {
    return {
      cls: 'iconfont ' + iconName,
      // cls: 'iconfont icon-' + iconName.substring(3),
    };
  }
};
</script>
