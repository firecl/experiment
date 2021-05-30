import { defineComponent, computed } from 'vue'
import { RouterView, useRouter, useRoute, RouterLink } from 'vue-router'
import { Layout, Card, Breadcrumb } from 'ant-design-vue'
import { GlobalFooter, GlobalHeader, GlobalSider, ToolBar } from '@/components'
import { useStore } from 'vuex'
import { MenuDataItem, Route } from '@ant-design-vue/pro-layout'

const { Sider, Header, Content, Footer } = Layout

const BasicLayout = defineComponent({
  name: 'BasicLayout',
  inheritAttrs: false,
  setup() {
    const store = useStore()
    const collapsed = computed(() => store.state.layout.collapsed)
    const route = useRoute()

    const breadcrumb = computed(() =>
      route.matched.concat().map((item: MenuDataItem) => {
        return { path: item.path, breadcrumbName: item.meta?.title } as Route
      }),
    )

    const getBreadCrumb = () => {
      return breadcrumb.value.map((item: Route) => {
        return (
          <Breadcrumb.Item>
            <RouterLink to={item.path}>{item.breadcrumbName}</RouterLink>
          </Breadcrumb.Item>
        )
      })
    }

    return () => (
      <Layout class="basic-layout-wrapper">
        <Sider collapsed={collapsed.value} collapsible={false} width="280px" trigger={null}>
          <GlobalSider />
        </Sider>
        <Layout style="overflow-y: scroll;">
          <Header class="basic-layout-header">
            <GlobalHeader
              v-slots={{
                toolbar: <ToolBar />,
              }}
            />
          </Header>
          <Content style="padding: 20px 10px 0 20px;">
            <Breadcrumb>{getBreadCrumb()}</Breadcrumb>
            <Card style="margin-top: 8px;">
              <RouterView />
            </Card>
          </Content>
          <Footer class="basic-layout-footer">
            <GlobalFooter />
          </Footer>
        </Layout>
      </Layout>
    )
  },
})

export default BasicLayout
