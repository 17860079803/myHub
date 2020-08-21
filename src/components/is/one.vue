<template>
  <div class="box">
      <h4>this is one</h4>
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