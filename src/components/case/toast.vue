<template>
  <div class="toast">
      <div class="con">{{title}}</div>
  </div>
</template>

<script>
export default {
    props:["title"],
    mounted(){
        this.time=setTimeout(()=>{
            this.$emit("close")
        },2000)
    },
    beforeDestroy(){
        clearTimeout(this.time)
    }
}
</script>

<style scoped>
.toast{
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
}
.con{
    padding: 5px 20px;
    background: rgba(0,0,0,0.7);
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 5px;
}
</style>