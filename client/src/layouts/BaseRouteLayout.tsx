import { defineComponent } from 'vue'
import { PageContainer } from '@ant-design-vue/pro-layout'

const BaseRouteLayout = defineComponent({
  name: 'BaseRouteLayout',
  setup() {
    return () => (
      <PageContainer>
        <router-view />
      </PageContainer>
    )
  },
})

export default BaseRouteLayout
