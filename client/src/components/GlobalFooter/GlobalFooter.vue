<template>
  <div class="ow-footer">
    <div class="copyright">
      &#9400;{{ new Date().getFullYear() }} made by
      <i>Lcy</i>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GlobalFooter',
  setup() {},
})
</script>

<style lang="less">
.copyright {
  font-family: monospace;
  font-size: 12pt;
}
</style>
