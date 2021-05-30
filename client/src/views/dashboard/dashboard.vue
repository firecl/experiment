<template>
  <div>
    <HelloWorld>
      <template #header="slotProps">
        <span>{{ slotProps.msg }}</span>
      </template>
    </HelloWorld>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../../components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    return {}
  },
})
</script>
