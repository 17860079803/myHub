<template>
  <div class="box">
      <h1>this is child</h1>
      <button @click="add">++</button>
      <button @click="change('王昭君')">王昭君</button>
      <button @click="change('鲁班')">鲁班</button>
  </div>
</template>

<script>
export default {
    methods:{
        add(){
            //通知父组件执行他的add方法
            //$emit() 触发自定义事件
            this.$emit("addn")
        },
        change(name){
            //$emit("自定义事件名称",参数) 参数最后可以通过event获取
            this.$emit("changeName",name)
        }
    }
}
</script>

<style>

</style>