<template>
  <div class="box">
      <h1>this is child</h1>
      <div>父组件给我的数据是：{{info}}</div>
      <input type="text" v-model="info">

      <div>msg2:{{a}}</div>
      <input type="text" v-model="a">

      <hr>
      <div>json.msg:{{json.msg}}</div>
      <input type="text" v-model="json.msg">
  </div>
</template>

<script>
// 属性：data computed props 
//父传子是单向数据流
//默认：父变，子变；子变，父不变，还要报错。 80%
//在子组件定义了一个属性，接收了父组件传递过来的值，这时候，父变，子不变；子变，父不变，但是不报错。
//如果想要实现父变，子变;子变，父变，还不报错，那么就传递一个json数据过来。20%
export default {
    props:["info","msg2","json"],
    data(){
      return {
        a:""
      }
    },
    mounted(){
      this.a=this.msg2
    }
}


</script>

<style>

</style>