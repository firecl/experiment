import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

const UserLayout = defineComponent({
  name: 'UserLayout',
  setup() {
    return () => (
      <div class="user-layout-wrapper">
        <div class="user-login-wrapper">
          <div class="user-login-header">
            <h2>mySelf System</h2>
          </div>
          <RouterView />
        </div>
      </div>
    )
  },
})

export default UserLayout
