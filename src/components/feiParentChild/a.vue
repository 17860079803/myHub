<template>
  <div class="box">
      <h3>this is A</h3>
      <p>a data:{{aData}}</p>
      <button @click="send">发送</button>
  </div>
</template>

<script>

export default {
    data(){
        return {
            aData:"a data"
        }
    },
    methods:{
        send(){
            this.Event.$emit("sendA",this.aData)
        }
    }
}
</script>

<style>

</style>