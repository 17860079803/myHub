<template>
  <div class="box">
      <!-- 具名插槽：如果内容要放进来，必须指定插槽名称 -->
      <slot name="one"></slot>
      <h4>this is two</h4>
      <slot name="two"></slot>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>