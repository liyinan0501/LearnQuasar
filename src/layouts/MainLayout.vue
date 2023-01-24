<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="s.toogleLeftDraw"
        />
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="s.leftDrawerOpen" show-if-above bordered>
      <q-scroll-area class="fit">
        <MenusDrawer :menus="menus" />
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { useLayoutStore } from 'src/stores/layout';
import {
  QLayout,
  QHeader,
  QToolbar,
  QBtn,
  QToolbarTitle,
  QDrawer,
  QPageContainer,
  QFooter,
  QAvatar,
} from 'quasar';
import { RouterView } from 'vue-router';
import MenusDrawer from 'src/components/MenusDrawer.vue';
import { generateMenus } from 'src/router/routes';

const s = useLayoutStore();
const menus = generateMenus();
</script>
