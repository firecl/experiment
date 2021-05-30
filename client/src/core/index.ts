import { App } from 'vue'
import { Button, Input, Space, DatePicker, Card, Table, message, Modal } from 'ant-design-vue'

interface IconInterface {
  [key: string]: any
}
import * as Icon from '@ant-design/icons-vue'

const includeIcons = ['CopyOutlined', 'BoldOutlined', 'BranchesOutlined', 'EditOutlined']

export default {
  install: (app: App) => {
    app.use(Button).use(Input).use(Space).use(DatePicker).use(Card).use(Table).use(Modal)

    Object.keys(Icon)
      .filter(m => includeIcons.includes(m))
      .forEach(m => {
        app.component((Icon as IconInterface)[m].displayName, (Icon as IconInterface)[m])
      })

    app.config.globalProperties.$message = message
  },
}
