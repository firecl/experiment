import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { BaseMenu, getMenuData } from '@ant-design-vue/pro-layout'
import { Emitter } from '@/utils'

export default defineComponent({
  name: 'MenuWrapper',
  inheritAttrs: false,
  setup(props, { attrs }) {
    const { getRoutes } = useRouter()

    const { menuData: menu } = getMenuData(getRoutes())

    const menuState = reactive({
      collapsed: false,
      openKeys: [menu[0].path],
      selectedKeys: [menu[0].path],
    })

    return () => (
      <div class="user-menu-wrapper">
        <BaseMenu
          {...attrs}
          {...props}
          menuData={menu}
          mode={'inline'}
          collapsed={menuState.collapsed}
          openKeys={menuState.openKeys}
          selectedKeys={menuState.selectedKeys}
          {...{
            'onUpdate:openKeys': ($event: string[]) => {
              menuState.openKeys = $event
            },
            'onUpdate:selectedKeys': ($event: string[]) => {
              menuState.selectedKeys = $event
            },
          }}
        />
      </div>
    )
  },
})
