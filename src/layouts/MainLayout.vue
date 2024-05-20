<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white q-px-md" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="/icons/icons8-aquarium-96.png">
          </q-avatar>
          Fish house
        </q-toolbar-title>
        <div class="text-subtitle">{{ todaysDate }}</div>
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
      <q-img src="/icons/1687863145_kartin-papik-pro-p-kartinki-more-tematika-11.jpg"
        class="header-image absolute-top"></q-img>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above :width="250" :breakpoint="600">
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-list padding class="menu-list">
          <q-item to="/Todo" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="filter_list" />
            </q-item-section>

            <q-item-section>
              ToDo
            </q-item-section>
          </q-item>

          <q-item to="/Help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>
              Help
            </q-item-section>
          </q-item>

          <q-item to="/AboutAs" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="lightbulb" />
            </q-item-section>

            <q-item-section>
              About as
            </q-item-section>
          </q-item>

          <q-item to="/Contacts" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="contacts" />
            </q-item-section>

            <q-item-section>
              Contacts
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img class="image absolute-top" src="/icons/1687863145_kartin-papik-pro-p-kartinki-more-tematika-11.jpg">
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="/icons/4aab2bd391d711ee9108f6744ca365da_upscaled.jpg">
          </q-avatar>
          <div class="text-weight-bold">Gerasimova Elena</div>
          <div>@mail</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="/icons/icons8-aquarium-96.png">
          </q-avatar>
          <div>Contact</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { computed, ref } from 'vue'
import { date } from 'quasar'

export default {
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    todaysDate() {
      const timeStamp = Date.now();
      return date.formatDate(timeStamp, 'DD/MM/YYYY')
    }
  }
}
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  filter: grey;
}

.image {
  height: 150px;
}
</style>