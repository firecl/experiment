<template>
  <div class="vps-toolbar">
    <div class="vps-toolbar-notifications" @click="toggleDropdown('notifications')">
      <div class="vps-icon-badge">
        <badge color="#ffff11" count="3">
          <BellOutlined />
        </badge>
      </div>
      <transition name="drop">
        <div
          class="vps-dropdown"
          :class="{ 'vps-dropdown-top': !isIntop, 'vps-dropdown-bottom': isIntop }"
          v-if="toggle.notifications"
        >
          <div>It's notifications</div>
        </div>
      </transition>
    </div>
    <div class="vps-toolbar-messages" @click="toggleDropdown('messages')">
      <div class="vps-icon-badge">
        <badge color="#11ff11" count="7">
          <MailOutlined />
        </badge>
      </div>
      <transition name="drop">
        <div
          class="vps-dropdown"
          :class="{ 'vps-dropdown-top': !isIntop, 'vps-dropdown-bottom': isIntop }"
          v-if="toggle.messages"
        >
          <div>It's messages</div>
        </div>
      </transition>
    </div>
    <div class="vps-toolbar-settings" @click="toggleDropdown('settings')">
      <div class="vps-icon-badge">
        <badge color="#ff5511">
          <SettingOutlined />
        </badge>
      </div>
      <transition name="drop">
        <div
          class="vps-dropdown"
          :class="{ 'vps-dropdown-top': !isIntop, 'vps-dropdown-bottom': isIntop }"
          v-if="toggle.settings"
        >
          <div>It's settings</div>
          <!-- <div class="vps-card">
            <list>
              <list-item title="Profile">
                <icon name="person" fill="#444" height="24px" width="24px"></icon>
              </list-item>
              <list-item title="help">
                <icon name="info" fill="#444" height="24px" width="24px"></icon>
              </list-item>
              <list-item title="Settings">
                <icon name="settings" fill="#444" height="24px" width="24px"></icon>
              </list-item>
            </list>
          </div> -->
        </div>
      </transition>
    </div>
    <div class="vps-toolbar-logout">
      <LogoutOutlined />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { LogoutOutlined, BellOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons-vue'
import { Badge } from 'ant-design-vue'

export default defineComponent({
  components: {
    LogoutOutlined,
    BellOutlined,
    MailOutlined,
    SettingOutlined,
    Badge,
  },
  setup() {
    const toggle = reactive({
      notifications: false,
      messages: false,
      settings: false,
    })

    return {
      toggle,
    }
  },
})
</script>

<style lang="less">
@import url('./index.less');
</style>
