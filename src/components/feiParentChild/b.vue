<template>
  <div class="box">
      <h3>this is b</h3>
      <button @click="sendA">发送a值是:王昭君</button>
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
            console.log(e);
            this.a=e;
        })
    },
    methods:{
        sendA(){
            this.Event.$emit("sendA","王昭君")
        }
    }
}
</script>

<style>

</style>