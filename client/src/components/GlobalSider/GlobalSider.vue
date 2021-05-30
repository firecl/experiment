<template>
  <div class="ow-sidebar">
    <div class="ow-logo" v-if="!collapsed">
      <h3>MYSELF SYSTEM</h3>
    </div>
    <div class="ow-sidebar-user">
      <div class="ow-sidebar-user--details">
        <div class="ow-sidebar-user-avatar">
          <UserOutlined :class="[!collapsed ? 'outAvatar' : 'inlineAvatar']" />
        </div>
        <div class="ow-sidebar-user-name" v-if="!collapsed">
          John
          <b>Smith</b>
        </div>
        <div class="ow-sidebar-user-role" v-if="!collapsed">Administrator</div>
        <div
          class="ow-sidebar-user-status"
          :class="[isOnline ? 'ow-sidebar-user-status-online' : 'ow-sidebar-user-status-offline']"
          v-if="!collapsed"
        >
          {{ isOnline ? '在线' : '离线' }}
        </div>
      </div>
    </div>
    <MenuWrapper />
    <ToolBar v-if="!collapsed" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs } from 'vue'
import MenuWrapper from '../Menu/Index'
import ToolBar from '../common/ToolBar.vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { useStore, mapState } from 'vuex'

export default defineComponent({
  components: {
    MenuWrapper,
    ToolBar,
    UserOutlined,
  },
  setup() {
    const store = useStore()
    const state = computed(() => store.state.layout).value

    return {
      ...toRefs(state),
    }
  },
})
</script>

<style lang="less">
@import url('./index.less');

.outAvatar {
  width: 64px;
  height: 64px;
  font-size: 64px;
}

.inlineAvatar {
  width: 32px;
  height: 32px;
  font-size: 32px;
}
</style>
