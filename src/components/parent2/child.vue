<template>
  <div class="box">
      <h1>this is child2</h1>
      <p>msg:{{msg}}</p>
      <p>age:{{age}}</p>
  </div>
</template>

<script>

export default {
    //props验证
    props:{
      msg:{
        //必传
        required:true,

        //传递的数据类型
        type:String
      },
      age:{
        type:Number,

        //设置默认值
        default(){
          return 50;
        }
      }
    },
    data(){
      return {
      
      }
    },
    mounted(){
      
    }
}


</script>

<style scoped>
h1{
  color: blue;
}
</style>