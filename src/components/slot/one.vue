<template>
  <div class="box">
      
      <h4>this is one </h4>

      <!-- 匿名插槽：
        1.如果没有内容，就不展示
        2.如果有内容，就直接展示在slot所在的位置
        3.如果有很多内容，全部展示在slot所在的位置
       -->
    <slot></slot>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log("one mounted");
    },
    beforeDestroy(){
        console.log("one destroy");
    }
}
</script>

<style>

</style>