import { reactive } from 'vue'
import { RouteContextProps } from '@ant-design-vue/pro-layout'

const defaultSettings: RouteContextProps = reactive<RouteContextProps>({
  navTheme: 'dark',
  layout: 'side',
  contentWidth: 'Fluid',
  contentStyle: {
    height: '100%',
    minHeight: '360px',
  },
  fixedHeader: true,
  fixSiderbar: true,
  menu: {
    locale: true,
  },
  headerHeight: 48,
  title: 'Ant Design Pro',
  iconfontUrl: '',
  primaryColor: '#1890ff',
  collapsed: false,
  openKeys: [''],
  selectedKeys: [''],
  isMobile: false,
  menuData: [],
  sideWidth: 240,
  splitMenus: false,
  hasSideMenu: false,
  hasHeader: true,
  hasFooterToolbar: false,
  setHasFooterToolbar: (has: boolean) => (defaultSettings.hasFooterToolbar = has),
})

export default defaultSettings
