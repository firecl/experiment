<template>
  <div class="ow-header" :class="{ 'ow-header-extended': !collapsed }" ref="header">
    <MenuFoldOutlined @click="toggleSidebar" class="toggleIcon" />

    <!-- <slot name="search"></slot> -->
    <div></div>

    <slot name="toolbar" v-if="collapsed"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { MenuFoldOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    MenuFoldOutlined,
  },
  setup() {
    const header = ref(null)
    const store = useStore()
    const collapsed = computed(() => store.state.layout.collapsed)

    const toggleSidebar = () => {
      store.dispatch('layout/set_collapsed_status', !collapsed.value)
    }

    return {
      header,
      collapsed,
      toggleSidebar,
    }
  },
})
</script>

<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.ow-header {
  grid-area: header;
  background: #65b4fd;
  color: white;
  transition: all 0.4s;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 64px auto 280px;
  // background-image: url(../assets/texture1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  &-extended {
    width: auto;
    transition: all 0.4s;
  }
  .vps-toolbar {
    filter: none;
    position: static;
    width: 280px;
    bottom: auto;
    right: 0px;
  }
}

.toggleIcon {
  cursor: pointer;
}
</style>
