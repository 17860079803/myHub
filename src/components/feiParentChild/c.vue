<template>
  <div class="box">
      <h3>this is c</h3>
      <p>a的数据：{{a}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            a:""
        }
    },
    mounted(){
        this.Event.$on("sendA",(e)=>{
            this.a=e;
        })
    }
}
</script>

<style>

</style>