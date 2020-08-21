<template>
  <div class="box">
      <h4>this is two</h4>
      <p>当前时间:{{date.toTimeString()}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            date:new Date()
        }
    },
    mounted(){
        this.time=setInterval(() => {
            this.date=new Date()
        }, 1000);
        console.log("two mounted");
    },
    beforeDestroy(){
        clearInterval(this.time)
        console.log("two destroy");
    }
}
</script>

<style>

</style>